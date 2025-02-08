const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send(`<html>

    <h1>hello world</h1>
    <a href="/home"> go page home </a>
    </html>`);
});

app.get("/home", (req, res) => {
  res.send(`<html>
    <h1>home page</h1>
    </html>`);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// `http:// localhost:3000/`