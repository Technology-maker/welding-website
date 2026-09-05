import { MongoClient } from "mongodb";

let connection;

async function collection() {
    if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is not configured");
    if (!connection) {
        const client = new MongoClient(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 5000 });
        connection = client.connect().then(async () => {
            const reviews = client.db(process.env.MONGODB_DB || "welding_website").collection("reviews");
            await reviews.createIndex({ createdAt: -1, _id: -1 });
            return reviews;
        }).catch(async (error) => {
            connection = undefined;
            await client.close();
            throw error;
        });
    }
    return connection;
}

export const reviewStore = {
    async list(page, limit) {
        const reviews = await collection();
        const [result] = await reviews.aggregate([
            { $sort: { createdAt: -1, _id: -1 } },
            { $facet: {
                reviews: [{ $skip: (page - 1) * limit }, { $limit: limit }],
                stats: [{ $group: { _id: null, total: { $sum: 1 }, average: { $avg: "$rating" } } }],
            } },
        ]).toArray();
        return { reviews: result.reviews, total: result.stats[0]?.total || 0, average: result.stats[0]?.average || 0 };
    },
    async create(review) {
        await (await collection()).insertOne(review);
    },
    async delete(id, ownerHash) {
        const filter = { _id: id };
        if (ownerHash) filter.ownerHash = ownerHash;
        return (await (await collection()).deleteOne(filter)).deletedCount === 1;
    },
};
