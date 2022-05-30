// librería de file reader
import * as fs from 'fs'; 
// files
const commands = './input/commands.txt';

const readInstructions = () => {
    try {
        const f = fs.readFileSync(commands, 'utf8');
        console.log(f);
        return f.split("\n");
    } catch (err) {
        console.error(err);
    }
}

export default readInstructions;



