// main
// librería de file reader
import * as fs from 'fs';
import {Robot} from './robot.js'
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

// manage line 0 of input
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
}

// manage first line of input: robot location
function createRobot(line){
    let coords = line.split(" ");
    let x = coords[0];
    let y = coords[1];
    let dir = coords[2];
    // create robot: pass limits and coordinates
    let robot = new Robot(x, y, dir, false);
    console.log(robot.dir);
    return robot;
}




const lines = readfile(command);
setDimensions(lines[0]);
for(let i = 1; i < lines.length; i++){
    let robot;
    // create robots in odd lines
    if(i%2 == 1){
       robot = createRobot(lines[i]);
       
    } else {
        // process instructions in even lines
        console.log(lines[i]);
    }
    
}



