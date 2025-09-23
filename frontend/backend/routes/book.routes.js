import express, { Router } from 'express'
import BookingController from "../controller/Booking.controller.js";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Your background was running perfectly !")
});

router.post("/booking", BookingController);

export default router;