console.log("roux")

class boule {
    /**
     * 
     * @param {*} x coord axe x centre de la boule
     * @param {*} y coord axe y centre de la boule
     * @param {*} rayon rayon de la boule
     */
    constructor(x, y, rayon, color) {
        this.rayon = rayon;
        this.x = x;
        this.y = y;
        this.v_x = 0;
        this.v_y = 0;
        this.color = color;
        this.creer_boule(x, y, rayon)
        this.objet = document.getElementsByClassName("boule")[0];
    }
    move() {
        this.x += this.v_x;
        this.y += this.v_y;
    }
    gravite() {
        this.v_y += 5;
    }
    creer_boule(x, y, rayon) {
        var Div_boule = document.createElement('div');
        Div_boule.style.cssText = "width: 20px;height: 20px;border-radius: 50%;background-color: aqua;top: 10px;left: 10px; position: absolute; ";

        Div_boule.draggable = "True";
        Div_boule.setAttribute("ondragstart", "drag()")
        document.body.appendChild(Div_boule);
    }

}

class cadre {
    constructor(width, height) {
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
    }
}
function drag() {
    console.log("wiiwiw")
}

function init() {
    return new boule(50, 50, 30);
}
window.onload = function () {
    boule = init()
}

