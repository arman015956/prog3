var LivingCreature = require("./LivingCreature");
var random = require("./random.js");



module.exports = class Vorsord extends LivingCreature{
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
            matrix[newY][newX] = 4;
            var vr = new Vorsord(newX, newY);
            VorsordArr.push(vr);
            vorsordHashiv++;
          

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
            this.energy += 10;
        }
    }

   

            


    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in VorsordArr) {
                if (VorsordArr[i].x == this.x && VorsordArr[i].y == this.y) {
                    VorsordArr.splice(i, 1)
                }
            }
        }

    }


}