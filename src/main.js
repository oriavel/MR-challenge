// modules
import actions from './actions/actions.js';
import readInstructions from './file-reader.js'

// board attributes
const boardMAX = 50;
let xMAX, yMAX; // board dimensions
let scents = []; // empty list of scents

// manage line 0 of input
function setDimensions(line) {
    let poss = line.split(" ");
    let x = parseInt(poss[0]);
    let y = parseInt(poss[1]);
    if (x >= boardMAX || y >= boardMAX || x < 0 || y < 0) {
        console.log("Wrong dimensions!");
    } else {
        // define limits for the board 
        xMAX = x;
        yMAX = y;        
    }
}

function isBorder(position) {
    let x = parseInt(position.x); 
    let y = parseInt(position.y);
    return (x > (xMAX-1) || y > (yMAX - 1)|| x < 0 || y < 0);
}
  
function fall(newPosition, state) { 
    let x = state.pos.x;
    let y = state.pos.y;
    // if it will pass the border (depending on scent) => add scent to list and fall
    if(isBorder(newPosition) && !scents.includes({x, y}) && !state.isFallen){ // isFallen just to check in case of coding error
        scents.push({x,y});
        return {pos: newPosition, isFallen: true}; // keep falling position. Performs last action
    // not in danger, so robot just acts normal
    } else {
        return {pos: newPosition, isFallen: state.isFallen};
    }
}

function processInstructions(acts, initPos){
    if (acts.length > 100) {
        console.log("Too many instructions!");
        return;
    }

    let out ="";                                    // output string
    let state = {pos: initPos, isFallen:false};     // position and isFallen (assuming robot is initially placed inside the board)
    for(let i = 0; i < acts.length; i++){
        let p = state.pos;
        if(!state.isFallen){
            state = fall(actions[acts[i]](p), state); // {{x, y, dir}, isFallen}      
            out = state.pos.x + " " + state.pos.y + " " + state.pos.dir;
        } else {
            out = p.x + " " + p.y + " " + p.dir + " LOST";
            return out;
        }
    }
    return out;
} 

// main code
const lines = readInstructions();
let output = "";
setDimensions(lines[0]);
let i = 1;
while(i < lines.length){
    // create robots in odd lines
    if(i%2 == 1){
        // odd line = robot specification
        let line = lines[i];
        let coords = line.trim().split(" ");
        // ROBOT(x, y, dir, fallen) found unnecessary to make a class in this case
        let x = coords[0];
        let y = coords[1];
        let dir = coords[2];
        i++;

        // even line = instructions
        // process instructions in even lines, for robots created in previous iteration
        output = output + processInstructions(lines[i].trim(), {x, y, dir}) + "\n";
        // guardar output de robot
        i++;
    }
}
console.log(output);
//console.log(scents);





