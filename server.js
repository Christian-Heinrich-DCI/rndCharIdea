const express = require("express");
require("dotenv").config();
const { getRndClass, getRndRace } = require("./model/dnd.model");

const port = process.env.PORT;
console.log(port);

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ race: getRndRace(), class: getRndClass() });
});

app.listen(port, () => {
    console.log("Express Server running under http://localhost:" + port);
});
