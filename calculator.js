//@ts-check

const express = require("express");
const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

    // Deconstucting of body, make sure you use the name attribute.
    const { num1, num2 } = req.body;

    let result = (Number(num1) + Number(num2));

    res.send(`Thanks for posting that brah. The result of your addition is ${result}.`);
});

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {

    // Deconstruct body
    const { weight, height } = req.body;

    let result = (Number(weight) / (Number(height) * Number(height)));

    res.send(`Your BMI is ${result}`);
});

app.listen(3000, function () {
    console.log(`Express server running on port 3000`);
});