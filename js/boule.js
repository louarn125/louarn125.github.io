console.log("roux")

class boule {
    /**
     * 
     * @param {*} x coord axe x centre de la boule
     * @param {*} y coord axe y centre de la boule
     * @param {*} rayon rayon de la boule
     */
    constructor(x,y,rayon,color){
        this.rayon = rayon;
        this.x = x;
        this.y = y;
        this.v_x = 0;
        this.v_y = 0;
        this.color = color;
    }
    move(){
        this.x+=this.v_x;
        this.y+=this.v_y;
    }
    gravite(){
        this.v_y += 5;
    }
}

class cadre {
    constructor(width,height){
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
    }
}