function setup() {

  var socket = io();

  var side = 30;

  var matrix = [];

 
  let grassCountElement = document.getElementById('grassCount');
  let xotakerCountElement = document.getElementById('xotakerCount');
  let gishatichCountElement = document.getElementById('gishatichCount');
  let vorsordCountElement = document.getElementById('vorsordCount');
  let VostikanCountElement = document.getElementById('vostikanCount');

 

  socket.on("data", drawCreatures);

  function drawCreatures(data) {
   
      matrix = data.matrix;
      grassCountElement.innerText = data.grassCounter;

      createCanvas(matrix[0].length * side, matrix.length * side)
  
      background('#acacac');
   

      for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("yellow");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 3) {
                fill('red');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 4) {
                fill('aqua');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 5) {
                fill('black');
                rect(j * side, i * side, side, side);
            }
        }
    }
}
}