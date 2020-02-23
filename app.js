const express = require("express");
const config = require("config");
const https = require("https");
const fs = require("fs");

let key = fs.readFileSync(__dirname + "/config/key.pem");
let cert = fs.readFileSync(__dirname + "/config/cert.pem");
let options = {
  key: key,
  cert: cert,
  passphrase: config.get("passphrase")
};

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public/"));
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

let server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`running on port ${port}`);
});
