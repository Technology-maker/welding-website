import "./config/env.js";
import express from "express";
import cors from "cors";
import router from './routes/book.routes.js'
import reviewRouter from './routes/review.routes.js';
const app = express();
const port = process.env.PORT || 5000;

// body parser middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: ["https://www.shreevinayak.shop", "http://localhost:5173", "https://welding-website-one.vercel.app"],   // your React app URL
    methods: ["GET", "POST", "DELETE"],
    credentials: true
}))

// routes
app.use('/api', router);
app.use('/api/reviews', reviewRouter);

app.get("/", (req, res) => {
    res.send("Backend is Running !");
})

// server start or port 
app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
});
