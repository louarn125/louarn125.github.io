console.log("roux")

class boule {
    /**
     * 
     * @param {*} x 
     * @param {*} y 
     * @param {*} rayon 
     */
    constructor(x,y,rayon){
        this.rayon = rayon;
        this.x = x;
        this.y = y;
        this.v_x = 0;
        this.v_y = 0;
    }
    move(){
        this.x+=this.v_x;
        this.y+=this.v_y;
    }
    gravite(){
        this.v_y += 5;
    }
}