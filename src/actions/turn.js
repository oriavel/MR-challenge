const directions = ["N", "E", "S", "W"]; // clockwise
function turn(x, y, dir, dirs) {
    dir = dirs[(dirs.indexOf(dir) + 1) % 4]; // next position with mod operation
    return {x, y, dir};
};

export const turnRight = ({x, y, dir}) => ({...turn(x, y, dir, directions)});
export const turnLeft = ({ x, y, dir}) => ({...turn(x, y, dir,  [...directions].reverse())}); // pass directions array backwards so it can be traversed forward


