const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let bugs = [];

app.post("/bugs", (req, res) => {
    bugs.push(req.body);
    res.send("Bug Added Successfully");
});

app.get("/bugs", (req, res) => {
    res.json(bugs);
});

app.listen(3000, () => {
    console.log("✅ Server running on port 3000");
});