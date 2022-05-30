# MARTIAN ROBOTS CHALLENGE

"The surface of Mars can be modelled by a rectangular grid around which robots areable to move according to instructions provided from Earth. You are to write a program that determines each sequence of robot positions and reports the final position of the robot. A robot position consists of a grid coordinate (a pair of integers: x-coordinate followed by y-coordinate) and an orientation (N, S, E, W for north, south, east, and west). An instruction is a string of the letters "L" left, "R" right, and "F" forward.

Since the grid is rectangular and bounded (...yes Mars is a strange planet), a robot that moves "off" an edge of the grid is lost forever. However, lost robots leave a robot "scent"that prohibits future robots from dropping off the world at the same grid point. The scentis left at the last grid position the robot occupied before disappearing over the edge. Aninstruction to move "off" the world from a grid point from which a robot has beenpreviously lost is simply ignored by the current robot."

# HOW TO RUN THE APP

### Requisites
✅ NodeJS app
✅ Robot turns and moves forward when it receives the corresponding instruction.
✅ The output indicates the final grid position and orientation of the robot, and whether it has fallen or not.
✅ Max 100 instructions per robot
✅ Board max dimension = 50 x 50 cells
✅ More than one robot.
✅ Mark scent of a cell when a robot falls from it, so others don't fall


## Optional requisites - nice to have - to improve
✅ Use of libraries: fs for file management
✅ Application running (execute the process over a given input) with simple script approach
❌ Persistence layer (TODO): store robots trajectory, placement, boards, etc in JSON
❌ Testing
❌ Docker shipping

### Implementation points
I used a simple script approach, using only modules for each type of instruction.

The robot and board aren't explicitly defined: 
- the robot is defined implicitly by the position {x,y,dir} and the isFallen state
- the board is implicitly defined by its limits/dimensions and a scent array which keeps all the positions to watch out to not fall.

I only keep the last position and state of the robot in the output, which can be identified because robots are placed in the same order in the output as they are in the input. This can be improved with a persistence layer, were I could keep each robot's information and even give them an identifier (ideally with mongo or a JSON).

The implementation of the fall was kept in the main file due to its simplicity, and need for types in the managing of certain variables. I would be nice to modularize it using typescript, for example. 

### Author
Oriana Aveledo
