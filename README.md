# MARTIAN ROBOTS CHALLENGE

"The surface of Mars can be modelled by a rectangular grid around which robots areable to move according to instructions provided from Earth. You are to write a program that determines each sequence of robot positions and reports the final position of the robot. A robot position consists of a grid coordinate (a pair of integers: x-coordinate followed by y-coordinate) and an orientation (N, S, E, W for north, south, east, and west). An instruction is a string of the letters "L" left, "R" right, and "F" forward.

Since the grid is rectangular and bounded (...yes Mars is a strange planet), a robot that moves "off" an edge of the grid is lost forever. However, lost robots leave a robot "scent"that prohibits future robots from dropping off the world at the same grid point. The scentis left at the last grid position the robot occupied before disappearing over the edge. Aninstruction to move "off" the world from a grid point from which a robot has beenpreviously lost is simply ignored by the current robot."

# HOW TO RUN THE APP
1. Open terminal
2. Clone the repository: `git clone https://github.com/oriavel/MR-challenge.git`
3. Install node: `npm install`
4. Run the code:
	- take terminal to MR-challenge directory `cd ./MR-challenge`
	- run command  `npm start`
5. To modify input: change commands.txt file in /input directory, following the specification


# Requisites

✅ NodeJS app 

✅ Robot turns and moves forward when it receives the corresponding instruction.

✅ The output indicates the final grid position and orientation of the robot, and whether it has fallen or not.

✅ Max 100 instructions per robot

✅ Board max dimension = 50 x 50 cells

✅ Process multiple robots

✅ Mark scent of a cell when a robot falls from it, so others don't fall

✅ Each robot is processed sequentially, i.e., finishes executing the robot instructionsbefore the next robot begins execution.

## Optional requisites - nice to have - to improve
✅ Use of libraries: fs for file management

✅ Application running (execute the process over a given input) with simple script approach

❌ Persistence layer (TODO): store robots trajectory, placement, boards, etc in JSON

❌ Testing

❌ Docker shipping

## Implementation details
INPUT => file in **MR-challenge/input/commands.js**
OUTPUT => terminal

I used a simple script approach, using only modules for each type of instruction. All the scripts related to the app's logic are located in the **MR-challenge/src** directory. It consists of a main.js, which manages input and output processing, robot, board and falling logic. There's also an **/src/actions** directory, which implements the intructions modules.

The robot and board aren't explicitly defined: 
- the robot is defined implicitly by the position {x,y,dir} and the isFallen state
- the board is implicitly defined by its limits/dimensions and a scent array which keeps all the positions to watch out to not fall.

I only keep the last position and state of the robot in the output, which can be identified because robots are placed in the same order in the output as they are in the input. This can be improved with a persistence layer, were I could keep each robot's information and even give them an identifier (ideally with mongo or a JSON).

The implementation of the fall was kept in the main file due to its simplicity, and need for types in the managing of certain variables. I would be nice to modularize it using typescript, for example. 

### Input, output and dimensions

The input is interpreted as
`xMAX yMAX
x y dir
[instructions]
x y dir
[instructions]`

Given I/O example for the challenge
<img width="104" alt="image" src="https://user-images.githubusercontent.com/58531404/171019101-1690d06d-8bbd-4500-8cc4-96b300fd41ad.png">

The domain of a coordenate x is defined as D(x)=[0, xMAX-1]
**Note:** in the example given for input output, the last robot starts in a forbidden cell (0,3). The coordinate y is 3, and that value is greater than the allowed domain xMAX-1 = 2. I interpreted this as a mistake, so this program will get a fall for that robot in its first intruction.
Correct output:
`1 1 E
3 3 N LOST
0 3 S LOST`

## Author
Oriana Aveledo
