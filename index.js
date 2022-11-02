const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.use("*", (req, res, error) => {
  res.status(200).json({ message: req.path });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
