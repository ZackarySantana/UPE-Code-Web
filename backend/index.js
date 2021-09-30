const app = require("express")();
const fs = require("fs");
const cors = require('cors');

app.use(cors());

// function to read .json file that contains questions
const readJSONFile = (filename, callback) => {
  fs.readFile(filename, (err, data) => {
    callback(JSON.parse(data));
  });
};

app.use("/questions", async (req, res) => {
    readJSONFile("db-questions.json", (data) => {
        res.send(data.questions);
    });
});

app.use("/question/:id", async (req, res) => {
    readJSONFile("db-questions.json", (data) => {
        res.send(data.questions[req.params.id - 1]);
    });
});

app.listen(40, () => {
    console.log("Listening on port 40");
});