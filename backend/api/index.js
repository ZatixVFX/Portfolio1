const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const nodemailer = require("nodemailer");

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

const handler = (req, res) => {
  const d = new Date();
  res.end(d.toString());
};

app.use(allowCors(handler));
app.use(cors());

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
