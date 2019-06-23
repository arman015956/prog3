var LivingCreature = require("./LivingCreature");
var random = require("./random.js");



module.exports = class Vostikan extends LivingCreature{
    constructor(x, y, index) {
        super(x, y);
        this.index = index;
        this.energy = 30;
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    mult() {
        var empty = random(this.chooseCell(0))
// 
        if (empty && this.energy > 35) {
            var empty = random(this.chooseCell(0));
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 5;
            var vs = new Vostikan(newX, newY);
            VostikanArr.push(vs);
            vostikanHashiv++;
        
        }


    }




    move() {

        var empty = random(this.chooseCell(0));
        this.energy--

        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
           

        }
    }

    eat() {
        var food = random(this.chooseCell(4));
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            for (var i in VorsordArr) {
                if (VorsordArr[i].x == newX && VorsordArr[i].y == newY) {
                    VorsordArr.splice(i, 1)
                }
            }


            this.x = newX;
            this.y = newY;
            this.energy += 10;
        }
    }


    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in VostikanArr) {
                if (VostikanArr[i].x == this.x && VostikanArr[i].y == this.y) {
                    VostikanArr.splice(i, 1)
                }
            }
        }

    }

}




