const axios = require("axios");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

let classes = [];
async function loadClasses() {
    const classResponse = await axios.get(
        "https://www.dnd5eapi.co/api/classes"
    );
    classes = classResponse.data.results.map((classItem) => classItem.name);
}
loadClasses();

let races = [];
async function loadRaces() {
    const raceResponse = await axios.get("https://www.dnd5eapi.co/api/races");
    races = raceResponse.data.results.map((raceItem) => raceItem.name);
}
loadRaces();

function getRndClass() {
    const rndClassIndex = getRandomInt(0, classes.length - 1);
    return classes[rndClassIndex];
}

function getRndRace() {
    const rndRaceIndex = getRandomInt(0, races.length - 1);
    return races[rndRaceIndex];
}

module.exports = { getRndClass, getRndRace };
