const fs = require("fs");
const superheroes = require("superheroes");
const supervillains = require("supervillains");

var mySuperHeroName = superheroes.random();
var mySuperVillainName = supervillains.random();

console.log(mySuperHeroName);
console.log(mySuperVillainName);