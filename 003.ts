import * as fs from 'fs';
const fileName = 'input/003.txt';
let fileContent = fs.readFileSync(fileName, 'utf8');

let elves = fileContent.split("\n");
console.log(elves.length);
let totalPriorities = 0;
//PART ONE

elves.map(elf => {
    let splitIndex = elf.length / 2;
    let compartmentOne = elf.slice(0,splitIndex);
    let compartmentTwo = elf.slice(splitIndex);

    let matchedChar = "";

    [...compartmentOne].map(one => {
        [...compartmentTwo].map(two => {
            if(one === two) matchedChar = one;
        });
    })

    //console.log("matched char ", matchedChar);
    let charValue =  (matchedChar === matchedChar.toUpperCase()) ? (parseInt(matchedChar,36) - 9) + 26 : parseInt(matchedChar,36) - 9;
    //console.log("CHAR VALUE", charValue);
    totalPriorities += charValue; 
});

console.log("total priorities", totalPriorities);

//PART TWO

let test = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

elves = fileContent.split('\n');

totalPriorities = 0;
let counter = 0; 
let group:string[] = [];

elves.map(elf => {
    if(counter <3) group.push(elf);
    if(counter == 2){
        let badge = getBadge(group);
        //console.log("BADGE", badge);
        let charValue =  (badge === badge.toUpperCase()) ? (parseInt(badge,36) - 9) + 26 : parseInt(badge,36) - 9;
        //console.log("CHAR VALUE", charValue);
        totalPriorities += charValue; 
        group=[];
        counter = -1;   
    };
    counter++;
});

console.log("BADGE total", totalPriorities);


function getBadge(group:string[]):string{
    let endObj = {};

    group.map(elf =>{
        let localObj = {};
        let values = [...elf.trim()];
        //console.log("VALUES", values);
        values.map(value => {
            if(localObj.hasOwnProperty(value)) localObj[value]++ ;
            if(!localObj.hasOwnProperty(value)) localObj[value] = 1;
        })
        
        Object.keys(localObj).map(key => {
            if(endObj.hasOwnProperty(key)) endObj[key]++ ;
            if(!endObj.hasOwnProperty(key)) endObj[key] = 1;
        })    
    })
    let mostFreq = Object.keys(endObj).reduce((a,b) => endObj[a] > endObj[b] ? a : b);

    return mostFreq;
}

//SAVE FOR LATER
function getMostCommon(str) {
    let values = [...str];
    let obj = {};
    
    values.map(value => {
        if(obj.hasOwnProperty(value)) obj[value]++ ;
        if(!obj.hasOwnProperty(value)) obj[value] = 1;
    })

    let mostFreq = Object.keys(obj).reduce((a,b) => obj[a] > obj[b] ? a : b);

    return mostFreq;
}