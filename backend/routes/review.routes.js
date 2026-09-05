import { Router } from "express";
import { createHash, randomUUID, timingSafeEqual } from "node:crypto";
import { reviewStore } from "../services/review-store.js";

const hash = (value) => createHash("sha256").update(value).digest("hex");
const ownerTokenPattern = /^[a-f0-9]{64}$/;
const idPattern = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/;

export function createReviewsRouter({ store = reviewStore, adminPassword = () => process.env.REVIEWS_ADMIN_PASSWORD } = {}) {
    const router = Router();
    const isAdmin = (req) => {
        const password = adminPassword();
        const authorization = req.get("Authorization") || "";
        if (!password || password.length <= 8 || !authorization.startsWith("Bearer ")) return false;
        return timingSafeEqual(Buffer.from(hash(authorization.slice(7))), Buffer.from(hash(password)));
    };
    const ownerHash = (req) => {
        const authorization = req.get("Authorization") || "";
        const token = authorization.startsWith("Review ") ? authorization.slice(7) : "";
        return ownerTokenPattern.test(token) ? hash(token) : null;
    };
    router.use((req, res, next) => {
        res.set("Cache-Control", "no-store");
        next();
    });

    router.post("/admin/verify", (req, res) => {
        if (!isAdmin(req)) return res.status(401).json({ message: "Invalid admin password or admin access is not configured." });
        res.json({ success: true });
    });

    router.get("/", async (req, res) => {
        const page = Number(req.query.page || 1);
        const limit = 6;
        if (!Number.isSafeInteger(page) || page < 1 || page > 1000000) {
            return res.status(400).json({ message: "Invalid page." });
        }
        const result = await store.list(page, limit);
        const requesterHash = ownerHash(req);
        res.json({
            ...result, page, limit,
            reviews: result.reviews.map((review) => ({
                id: review._id, name: review.name, project: review.project,
                rating: review.rating, text: review.text, createdAt: review.createdAt,
                canDelete: Boolean(requesterHash && requesterHash === review.ownerHash),
            })),
        });
    });

    router.post("/", async (req, res) => {
        const requesterHash = ownerHash(req);
        if (!requesterHash) return res.status(401).json({ message: "Your browser could not establish review ownership. Please reload and try again." });
        const { name, project = "", text, rating } = req.body || {};
        if (typeof name !== "string" || !name.trim() || name.trim().length > 80 ||
            typeof project !== "string" || project.trim().length > 120 ||
            typeof text !== "string" || !text.trim() || text.trim().length > 2000 ||
            !Number.isInteger(rating) || rating < 1 || rating > 5) {
            return res.status(400).json({ message: "Enter a name (up to 80 characters), project (up to 120), review (up to 2,000), and a rating from 1 to 5." });
        }
        const review = {
            _id: randomUUID(), name: name.trim(), project: project.trim() || "Custom Metalwork",
            text: text.trim(), rating, ownerHash: requesterHash, createdAt: new Date(),
        };
        await store.create(review);
        res.status(201).json({ id: review._id });
    });

    router.delete("/:id", async (req, res) => {
        const admin = isAdmin(req);
        const requesterHash = ownerHash(req);
        if (!admin && !requesterHash) return res.status(403).json({ message: "You do not have permission to delete this review." });
        if (!idPattern.test(req.params.id)) return res.status(400).json({ message: "Invalid review ID." });
        // Ownership is part of the database delete, so clients cannot claim another author's review.
        const deleted = await store.delete(req.params.id, admin ? null : requesterHash);
        if (!deleted) return res.status(404).json({ message: "Review not found or you do not have permission to delete it." });
        res.status(204).end();
    });

    router.use((error, req, res, next) => {
        if (res.headersSent) return next(error);
        console.error("Review storage request failed:", error.name);
        res.status(503).json({ message: "Reviews are temporarily unavailable. Please try again later." });
    });
    return router;
}

export default createReviewsRouter();
