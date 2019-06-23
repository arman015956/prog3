var Grass = require("./Grass.js");
var Xotaker = require("./Xotaker.js");
var Gishatich = require("./Gishatich.js");
var Vorsord = require("./Vorsord.js");
var Vostikan = require("./Vostikan.js");
let random = require('./random');


GrassArr = [];
XotakerArr = [];
GishatichArr = [];
VorsordArr = [];
VostikanArr = [];
grassHashiv = 0;
xotakerHashiv = 0;
gishatichHashiv = 0;
vorsordHashiv = 0;
vostikanHashiv = 0;
matrix = [];


function matrixGenerator(matrixSize, Grass, Xotaker, Gishatich, Vorsord, Vostikan) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < Grass; i++) {
        let customX = Math.floor(random(matrixSize)); 
        let customY = Math.floor(random(matrixSize)); 
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < Xotaker; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i <Gishatich; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < Vorsord; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < Vostikan; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
}
matrixGenerator(15, 5, 20, 20, 25,25);




var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);



function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var xotaker = new Xotaker(x, y);
                XotakerArr.push(xotaker);
                // xotakerHashiv++;
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                GrassArr.push(grass);
                // grassHashiv++;
            }
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y);
                GishatichArr.push(gishatich);
                // gishatichHashiv++;
            }
            else if (matrix[y][x] == 4) {
                var vorsord = new Vorsord(x, y);
                VorsordArr.push(vorsord);
                // vorsordHashiv++;
            }
         
            else if (matrix[y][x] == 5) {
                var vostikan = new Vostikan(x, y);
                VostikanArr.push(vostikan);
            //    vostikanHashiv++;
            }
        }
    }
}
creatingObjects();



function game() {
    if (GrassArr[0] !== undefined) {
        for (var i in GrassArr) {
            GrassArr[i].mult();
        }
    }
    if (XotakerArr[0] !== undefined) {
        for (var i in XotakerArr) {
            XotakerArr[i].mult();
            XotakerArr[i].move();
            XotakerArr[i].eat();
            XotakerArr[i].die();
        }
    }


    if (GishatichArr[0] !== undefined) {
        for (var i in GishatichArr) {
            GishatichArr[i].mult();
            GishatichArr[i].move();
            GishatichArr[i].eat();
            GishatichArr[i].eat1();
            GishatichArr[i].die();
        }
    }


    if (VorsordArr[0] !== undefined) {
        for (var i in VorsordArr) {
            VorsordArr[i].mult();
            VorsordArr[i].move();
            VorsordArr[i].eat();
            // VorsordArr[i].eat1();
            VorsordArr[i].die();
        }
    }
    if (VostikanArr[0] !== undefined) {
        for (var i in VostikanArr) {
            VostikanArr[i].mult();
            VostikanArr[i].move();
            VostikanArr[i].eat();
            VostikanArr[i].die();
        }
    }


    

    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        xotakerCounter: xotakerHashiv,
        gishatichCounter: gishatichHashiv,
        vorsordCounter: vorsordHashiv,
        vostikanCounter:vostikanHashiv,
    }

  
    io.sockets.emit("data", sendData);
}



setInterval(game, 1000)


weather = 'spring';

setInterval(function () 
{
  if (weather == 'spring') 
  {
    weather = 'summer';
    console.log("summ");
  }

  else if (weather == 'summer') 
  {
    weather = 'autumn';
  }

  else if (weather == 'autumn') 
  {
    weather = 'winter';
  }

  else if (weather == 'winter') 
  {
    weather = 'spring';
  }
}, 60000)

