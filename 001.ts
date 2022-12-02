import * as fs from 'fs';
const fileName = 'input/001.txt';
let fileContent = fs.readFileSync(fileName, 'utf8');
const elves = fileContent.split(/\n\s*\n/);
console.log(elves.length);
let maxCalCount = 0;

//PART ONE

elves.map(elf => {
    let calories = elf.split("\n");
    let elfCalCount = calories.reduce((a,b) => {return +a + +b},0);
    if(elfCalCount > maxCalCount) maxCalCount = elfCalCount;
})

console.log("MAX CALS", maxCalCount);

//PART TWO

let elvesCals: number[] = [];

elves.map(elf => {
    let calories = elf.split("\n");
    let elfCalCount = calories.reduce((a,b) => {return +a + +b},0);
    elvesCals.push(elfCalCount);
})

elvesCals.sort((a,b) => b-a);

let top3Elves = elvesCals.slice(0,3).reduce((a,b) => {return +a + +b},0);

console.log("TOP 3 ELVES ",top3Elves);
