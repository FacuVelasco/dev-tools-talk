const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

app.use(cookieParser());

app.get("/slow-request", (req, res) => {
  // let's respond... in a while
  setTimeout(() => res.send("Ready at last"), 3000);
});

app.get("/forever-loading-request", (req, res) => {
  // I guess this is my life now ¯\_(ツ)_/¯
});

app.get("/cookie", (req, res) => {
  res.cookie("cookie", { value: "there's no cookie" });
  res.send();
});

app.use(express.static(path.resolve(__dirname, "dist")));

app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, "dist/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening at ${PORT}`));
