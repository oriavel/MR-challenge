// main
// librería de file reader

const command = './src/commands.txt';

const fs = require('fs');

function readfile(file){
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
        x = data.charAt(0);
        y = data.charAt(2);
      });
}
function setDimensions(x,y){
    if(x >= 50 || y >= 50 || x < 0 || y < 0){
        console.log("Wrong dimensions!");
    } else {
        // define limits for the board const Y-MAX and X-MAX
    }
}
readfile(command);


