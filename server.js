"use strict";

const express = require("express");

// Constants
const PORT = 8081;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/date", (req, res) => {
  var currentTime = new Date(Date.now()).toLocaleString();
  res.send(currentTime);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
