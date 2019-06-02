class Vostikan extends LivingCreature{
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

        if (empty && this.energy > 30) {
            var empty = random(this.chooseCell(0));
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 5;
            var vs = new vostikan(newX, newY);
            vostikanArr.push(vs);

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
            for (var i in vorsordArr) {
                if (vorsordArr[i].x == newX && vorsordArr[i].y == newY) {
                    vorsordArr.splice(i, 1)
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
            for (var i in vostikanArr) {
                if (vostikanArr[i].x == this.x && vostikanArr[i].y == this.y) {
                    vostikanArr.splice(i, 1)
                }
            }
        }

    }

}




