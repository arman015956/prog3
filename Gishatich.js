var LivingCreature = require("./LivingCreature");
var random = require("./random.js");



module.exports = class Gishatich extends LivingCreature{
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
        gishatichHashiv++;
        if (empty && this.energy > 60) {
            var empty = random(this.chooseCell(0));
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            var gt = new gishatich(newX, newY);
            GishatichArr.push(gt);
           

        }


    }




    move() {

        var empty = random(this.chooseCell(0));
        this.energy--

        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
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
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            for (var i in XotakerArr) {
                if (XotakerArr[i].x == newX && XotakerArr[i].y == newY) {
                    XotakerArr.splice(i, 1)
                }
            }

            this.x = newX;
            this.y = newY;
            this.energy += 2;
        }
    } 

   

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (GishatichArr[i].x == this.x && GishatichArr[i].y == this.y) {
                    GishatichArr.splice(i, 1)
                }
            }
        }

    }

}

