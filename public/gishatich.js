
var glux = require('./classes.js');
module.exports = class Gishatich  extends Glux{
   
   

    stanalNorKordinatner() {
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

    sharjvel() {
        if(or==0){
        var vandakik = this.yntrelVandak(0);
        var vand = vandakik[Math.floor(Math.random() * vandakik.length)];
        if (vand && this.multiply >= this.speed / 2) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 3;
            
        }
    }
       
    }

    utel() {
        var tiv = 2;
       if(weather=="garun" || weather=="amar")
            this.energy--;
        else
            tiv=2;

        this.energy--;
        var vandakik = this.yntrelVandak(tiv);
        var vand = vandakik[Math.floor(Math.random() * vandakik.length)];
        if (vand && this.multiply >= this.speed / 2) {
            this.energy += this.speed/2;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 3;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                    chaps_4--;
                }
            }
        }
        else this.sharjvel();
    }

    bazmanal() {
       
if(or==0){
       var vandakik = this.yntrelVandak(0);
        var vand = vandakik[Math.floor(Math.random() * vandakik.length)];
        if (vand && this.energy >= this.speed) {
            this.energy = 1;

            if(weather == "garun")
                this.energy ++;
            if(weather=="dzmer")
                this.energy --;

            var newgishatich = new Gishatich(vand[0], vand[1], 3);
            gishatichArr.push(newgishatich);
            gishach++;
            
            
        }
    }
}



    mahanal() {
        
        if (this.energy <= -(this.speed / 2)) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                    gishach--;
                }
            }
        }
    }
}
