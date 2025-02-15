import path from "path";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import nodemailer from "nodemailer";

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "https://mail-server-lyart.vercel.app/api",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "frontend/dist")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
  // app.get("/", (req, res) => {
  //   res.send("API is running....");
  // });
} else {
  app.get("/api", (req, res) => {
    res.send("API is running....");
  });
}

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "no.reply.portfolio.js@gmail.com",
    pass: process.env.GMAIL_PWD,
  },
});

app.post("/api/send_mail", async (req, res) => {
  const { name, email, msg } = req.body;

  try {
    await transport.sendMail({
      from: `"No Reply" <no.reply.portfolio.js@gmail.com>`,
      cc: "jsalie165@gmail.com",
      to: email,
      subject: "Portfolio mail",
      text: msg,
    });

    res.json({ sent: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ sent: false, error: error.message });
  }
});

app.listen(port, () => console.log(`Server started on port ${port}`));
