import * as fs from 'fs';
const fileName = 'input/004.txt';
let fileContent = fs.readFileSync(fileName, 'utf8');

let pairs = fileContent.split("\n");
console.log(pairs.length);
let fullyCleaned = 0;

//PART ONE

pairs.map(pair => {
let elves = pair.split(',');
let elfA = elves[0].split('-');
let elfB = elves[1].split('-');
let cleanedElfA = elfA.map(part => +part.trim());
let cleanedElfB = elfB.map(part => +part.trim());

if((cleanedElfA[0] >= cleanedElfB[0] && cleanedElfA[1] <= cleanedElfB[1]) || ( cleanedElfB[0] >= cleanedElfA[0] && cleanedElfB[1] <= cleanedElfA[1]) ){
    //console.log(cleanedElfA, cleanedElfB);
    ++fullyCleaned;
} 

});

console.log("FULLY CLEANED", fullyCleaned);

//PART TWO

let pairsOverlap = 0;
let noOverlap = 0;
pairs.map(pair => {
    let elves = pair.split(',');
    let elfA = elves[0].split('-');
    let elfB = elves[1].split('-');
    let cleanedElfA = elfA.map(part => +part.trim());
    let cleanedElfB = elfB.map(part => +part.trim());

    if(
        (cleanedElfA[0] >= cleanedElfB[0] && cleanedElfA[0] <= cleanedElfB[1])
    ||  (cleanedElfA[1] >= cleanedElfB[0] && cleanedElfA[1] <= cleanedElfB[1])
    ||  (cleanedElfB[0] >= cleanedElfA[0] && cleanedElfB[0] <= cleanedElfA[1])
    ||  (cleanedElfB[1] >= cleanedElfA[0] && cleanedElfB[1] <= cleanedElfA[1])
    ){
        //console.log(cleanedElfA, cleanedElfB);
        ++pairsOverlap;  
    }
    else{
        //console.log("NO |", cleanedElfA, cleanedElfB);
        ++noOverlap;
    }     

});


console.log("PAIRS OVERLAP", pairsOverlap);
console.log("NO OVERLAP", noOverlap);