

var m=Math.round((Math.random()*20)+5)
var n=Math.round((Math.random()*20)+5)
 var matrix=[]
 var side=60
 function getRandInt(max){
    return Math.round(Math.random()*Math.floor(max))
 }
 for(var y = 0; y < m; y++){
     matrix[y]=[]
   for(var x = 0; x <n; x++){
       


      

             matrix[y].push(getRandInt(6))
             
            
            
            
    
     }
 }console.log(matrix)


var side =10;

var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var vorsordArr = [];
var vostikanArr = [];



for (var y = 0; y < matrix.length; y++) {
  for (var x = 0; x < matrix[y].length; x++) {
    if (matrix[y][x] == 1) {
      var gr = new Grass(x, y)
      grassArr.push(gr)
    }
    else if (matrix[y][x] == 2) {
      var xt = new xotaker(x, y)
      xotakerArr.push(xt)
    }
    else if (matrix[y][x] == 5) {
      var vs = new vostikan(x, y)
      vostikanArr.push(vs)
    }
    else if (matrix[y][x] == 4) {
      var vr = new vorsord(x, y)
      vorsordArr.push(vr)
    }
    else if (matrix[y][x] == 3) {
      var gt = new gishatich(x, y)
      gishatichArr.push(gt)
    }
  }
}





function setup() {
  frameRate(5);
  createCanvas(matrix[0].length * side, matrix.length * side);
  background('#acacac');
}

function draw() {

  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill("green");
      }
      else if (matrix[y][x] == 0) {
        fill("#acacac");
      }
      else if (matrix[y][x] == 2) {
        fill("yellow");
      }
      else if (matrix[y][x] == 3) {
        fill("red");
      }
      else if (matrix[y][x] == 4) {
        fill("aqua");
      }
  
      else if (matrix[y][x] == 5) {
        fill("black");
      }

     

      rect(x * side, y * side, side, side)

      // showIndexes(x, y)

    }
  }

  for (var i in grassArr) {
    grassArr[i].mult()
  }


  for (var i in xotakerArr) {
    xotakerArr[i].mult();
    xotakerArr[i].move();
    xotakerArr[i].eat();
    xotakerArr[i].die();
  }

  for (var i in gishatichArr) {
    gishatichArr[i].mult();
    gishatichArr[i].move();
    gishatichArr[i].eat();
    gishatichArr[i].eat1();
    gishatichArr[i].die();
  }


  for (var i in vorsordArr) {
    vorsordArr[i].mult();
    vorsordArr[i].move();
    vorsordArr[i].eat();
    vorsordArr[i].die()

  }
  for (var i in vostikanArr) {
    vostikanArr[i].mult();
    vostikanArr[i].move();
    vostikanArr[i].eat();
    vostikanArr[i].die();
  }
  
 }




// function showIndexes(x, y) {
//   // fill("yellow")
//   //  text(x + " " + y, x * side + side / 2, y * side + side / 2)
