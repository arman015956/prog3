

var LivingCreature = require("./LivingCreature");
var random = require("./random.js");



module.exports = class Xotaker extends LivingCreature {

   
        constructor(x, y, index) {
            super(x, y);
            this.index = index;
            this.energy = 10;
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
        if (empty && this.energy > 30) {
            var empty = random(this.chooseCell(0));
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 2;
            var xt = new Xotaker(newX, newY);
          
            XotakerArr.push(xt);
            xotakerHashiv++;
          
        

        }


    }




    move() {

        var empty = random(this.chooseCell(0));
        this.energy -= 2

        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
           
          

        }
    }

    eat() {
        var food = random(this.chooseCell(1));
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            for (var i in GrassArr) {
                if (GrassArr[i].x == newX && GrassArr[i].y == newY) {
                    GrassArr.splice(i, 1)
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
            for (var i in XotakerArr) {
                if (XotakerArr[i].x == this.x && XotakerArr[i].y == this.y) {
                    XotakerArr.splice(i, 1)
                  
                }
            }
        }

    }

}

