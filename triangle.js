const drawTriangle = side => {
  let line = '';
  while (line.length <= side) {
    line += '#';
    console.log(line);
  }
}

drawTriangle(7);