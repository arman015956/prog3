var LivingCreature = require("./LivingCreature");
var random = require("./random.js");



module.exports = class Vosrsord extends LivingCreature{
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
vorsordHashiv++;
        if (empty && this.energy > 30) {
            var empty = random(this.chooseCell(0));
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4;
            var vr = new vorsord(newX, newY);
            VorsordArr.push(vr);

        }


    }




    move() {

        var empty = random(this.chooseCell(0));
        this.energy--

        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

        }
    }

    eat() {
        var food = random(this.chooseCell(2));
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            for (var i in XotakerArr) {
                if (XotakerArr[i].x == newX && XotakerArr[i].y == newY) {
                    XotakerArr.splice(i, 1)
                }
            }


            this.x = newX;
            this.y = newY;
            this.energy += 3;
        }
    }

    eat1() {
        var food = random(this.chooseCell(3));
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            for (var i in XotakerArr) {
                if (GishatichArr[i].x == newX && GishatichArr[i].y == newY) {
                    GishatichArr.splice(i, 1)
                }
            }


            this.x = newX;
            this.y = newY;
            this.energy += 3;
        }
    }


    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in vorsordArr) {
                if (VorsordArr[i].x == this.x && VorsordArr[i].y == this.y) {
                    VorsordArr.splice(i, 1)
                }
            }
        }

    }


}