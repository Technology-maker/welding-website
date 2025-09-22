import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const Bookingcontroller = async (req, res) => {
    const { name, address, phone, email, subject, message } = req.body;

    try {
        // Setup Gmail transporter
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // Google App Password
            },
        });

        // Email details (includes user's email now)
        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // you receive the email yourself
            replyTo: email, // ✅ allows you to reply directly to the customer
            subject: subject || "New Booking Request",
            text: `📩 New Booking Request\n
            👤 Name: ${name}\n
            📧 Email: ${email}\n
            📞 Phone: ${phone}\n
            🏠 Address: ${address}\n
            💭 Message: ${message}`,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: "✅ Booking email sent successfully!" });
    } catch (error) {
        console.error("❌ Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send booking email." });
    }
};

export default Bookingcontroller;
