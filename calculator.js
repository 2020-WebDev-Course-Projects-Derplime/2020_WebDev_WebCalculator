//@ts-check

const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("Hello World!");
});

app.listen(3000, function() {
    console.log(`Express server running on port 3000`);
});
