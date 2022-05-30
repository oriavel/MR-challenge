function actions(xp, yp, dir) {
  let y = parseInt(yp);
  let x = parseInt(xp);
  switch(dir){
    case "N": y = y + 1; break;
    case "E": x = x + 1; break;
    case "S": y = y - 1; break;
    case "W": x = x - 1; break;
  }
  return {x, y, dir};
}
  
  const move = ({x, y , dir}) => ({ ...actions(x, y, dir)});
  
  export default move;