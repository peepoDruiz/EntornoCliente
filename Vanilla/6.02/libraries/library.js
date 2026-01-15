"use strict";

//APIs
const api1 = () => {
    return "https://swapi.info/api/films";
};

const api2 = () => {
    return "http://swapi.py4e.com/api/films";
};

const api3 = () => {
    return "https://swapi.dev/api/films";
};

const catchData = async () => {
    return fetch(api3())
    .then((object) => {
        if (!object.ok) {
            throw new Error("Conexión a la API fallida.")
        } else {
            return object.json();
        }
    })
    .then((data) => {
        if (data.results.length) {
            return data.results;
        } else {
            throw new Error("Ali Baba");
        }
    })
}

export { catchData };