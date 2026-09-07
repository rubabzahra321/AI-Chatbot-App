const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

app.post("/api/chat", async (req, res) => {
    try {
        const { message } = req.body;

        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: message
                }
            ],
            model: "llama-3.1-8b-instant"
        });

        const reply = completion.choices[0].message.content;

        res.json({
            reply: reply
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Something went wrong"
        });
    }
});

app.listen(5000, () => {
    console.log("Backend running on http://localhost:5000");
});