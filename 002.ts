import * as fs from 'fs';
const fileName = 'input/002.txt';
let fileContent = fs.readFileSync(fileName, 'utf8');

const rounds = fileContent.split("\n");
console.log(rounds.length);
let score = 0;

//PART ONE

//A & X Rock
//B & Y Paper
//C & Z Scissor
//rock 1, paper 2, scissor 3
//win 6, draw 3

rounds.map(round => {
let hands = round.split(" ");
    if(hands[0].trim() === 'A') {
        if(hands[1].trim() === 'Y') score += 8
        if(hands[1].trim() === 'X') score += 4
        if(hands[1].trim() === 'Z') score += 3
    }
    if(hands[0].trim() === 'B'){
        if(hands[1].trim() === 'Y') score += 5
        if(hands[1].trim() === 'X') score += 1
        if(hands[1].trim() === 'Z') score += 9
    }
    if(hands[0].trim() === 'C'){
        if(hands[1].trim() === 'Y') score += 2
        if(hands[1].trim() === 'X') score += 7
        if(hands[1].trim() === 'Z') score += 6
    }

})

console.log("PART ONE SCORE", score);

//PART TWO

let part2Score = 0;

rounds.map(round => {
let hands = round.split(" ");

//X === LOSE
//Y === DRAW
//Z === WIN 

//A & X Rock
//B & Y Paper
//C & Z Scissor
//rock 1, paper 2, scissor 3
//win 6, draw 3

if(hands[0].trim() === 'A') {
    if(hands[1].trim() === 'Y') part2Score += 4 
    if(hands[1].trim() === 'X') part2Score += 3
    if(hands[1].trim() === 'Z') part2Score += 8
}
if(hands[0].trim() === 'B'){
    if(hands[1].trim() === 'Y') part2Score += 5
    if(hands[1].trim() === 'X') part2Score += 1
    if(hands[1].trim() === 'Z') part2Score += 9
}
if(hands[0].trim() === 'C'){
    if(hands[1].trim() === 'Y') part2Score += 6
    if(hands[1].trim() === 'X') part2Score += 2
    if(hands[1].trim() === 'Z') part2Score += 7
}
})

console.log("PART TWO SCORE", part2Score);