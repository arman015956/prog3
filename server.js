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
matrixGenerator(20, 1, 1, 1, 1, 1);




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
                var Xotaker = new Xotaker(x, y);
                XotakerArr.push(Xotaker);
                xotakerHashiv++;
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                GrassArr.push(Grass);
                grassHashiv++;
            }
            else if (matrix[y][x] == 3) {
                var Gishatich = new Gishatich(x, y);
                GishatichArr.push(Gishatich);
                gishatichHashiv++;
            }
            else if (matrix[y][x] == 4) {
                var Vorsord = new Vorsord(x, y);
                VorsordArr.push(Vorsord);
                vorsordHashiv++;
            }
            else if (matrix[y][x] == 5) {
                var Vostikan = new Vostikan(x, y);
                VostikanArr.push(Vostikan);
               vostikanHashiv++;
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
        for (var i in XotakerArr) {
            GishatichArr[i].mult();
            GishatichArr[i].move();
            GishatichArr[i].eat();
            GishatichArr[i].die();
        }
    }


    if (VorsordArr[0] !== undefined) {
        for (var i in XotakerArr) {
            VorsordArr[i].mult();
            VorsordArr[i].move();
            VorsordArr[i].eat();
            VorsordArr[i].die();
        }
    }

    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        xotakerCounter: xotakerHashiv,
        gishatichCounter: gishatichHashiv,
        vorsordCounter: vorsordHaashiv,
        vostikanCounter:vostikanHashiv,
    }

    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
}



setInterval(game, 1000)