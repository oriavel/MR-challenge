// main
// librería de file reader
const path = require('path');
const fs = require('fs');
const command = './src/commands.txt';

let xMAX, yMAX; // board dimensions
// scent list




function readfile(file) {

    try {
        const f = fs.readFileSync(file, 'utf8');
        console.log(f);
        return f.split("\n");
    } catch (err) {
        console.error(err);
    }

}




function setDimensions(line) {
    let poss = line.split(" ");
    let x = poss[0];
    let y = poss[1];
    if (x >= 50 || y >= 50 || x < 0 || y < 0) {
        console.log("Wrong dimensions!");
    } else {
        // define limits for the board 
        xMAX = x;
        yMAX = y;        
    }
    console.log(xMAX);
    console.log(yMAX);
}

const lines = readfile(command);
setDimensions(lines[0]);


