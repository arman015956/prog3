class Grass extends LivingCreature{

mult() {
    var empty = random(this.chooseCell(0))
    this.multiply++;
    if (empty && this.multiply > 4) {
        var empty = random(this.chooseCell(0));
        var x = empty[0];
        var y = empty[1];
        matrix[y][x] = 1;
        var gr = new Grass(x, y, 1);
        grassArr.push(gr);

    }

}


}

