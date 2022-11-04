const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.use("*", (req, res, error) => {
  var fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  res.setHeader("Content-Type", "text/html");
  res.send(`<h1>You've opened ${fullUrl}</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
