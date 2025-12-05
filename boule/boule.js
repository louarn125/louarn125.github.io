let MouseY;
let MouseX;
let PositionsBoulles = [];
let vecteur;
let inter_frame;
let inter_animation = null;

let boule_x;
let boule_y;

function MouseDown(){
    console.log("rien");
    clearInterval(inter_animation);
    document.addEventListener("mousemove", Move);
    document.addEventListener("mouseup", Stop);
    inter_frame = setInterval(frame,17);

}

function frame(){
    let temp = [MouseX-10,MouseY-10];
    PositionsBoulles.push(temp);
    while(PositionsBoulles.length>2){
        PositionsBoulles.shift();
    }
    console.log(PositionsBoulles);
}

function Move(e){
    let boulle = document.getElementById("boulle");
    let zone_lancer = document.getElementById("zone");
    MouseX = e.clientX;
    MouseY = e.clientY;
    boulle.style.top = MouseY-10+"px";
    boulle.style.left = MouseX-10+"px";
    if(MouseX <= zone_lancer.offsetLeft || MouseX >= zone_lancer.offsetLeft + zone_lancer.offsetWidth || MouseY >= zone_lancer.offsetTop + zone_lancer.offsetHeight || MouseY <= zone_lancer.offsetTop){
        Stop();
    }

}

function calcul_vecteur(){
    console.log(PositionsBoulles);
    if(PositionsBoulles.length == 0){
        vecteur = [0,0];
    }else{
        vecteur = [(PositionsBoulles[1][0]-PositionsBoulles[0][0])/10,(PositionsBoulles[1][1]-PositionsBoulles[0][1])/5];
    }
    console.log(vecteur[0], vecteur[1]);
}

function animation(){
    console.log("test");
    let boulle = document.getElementById("boulle");
    vecteur[0]*=0.998;
    vecteur[1]*=0.995;
    vecteur[1]+=0.05;
    boule_y+=vecteur[1];
    boule_x+=vecteur[0];
    boulle.style.top = boule_y+"px";
    boulle.style.left = boule_x+"px";
    console.log(window.innerHeight);
    if(boulle.offsetTop+boulle.offsetHeight >= window.innerHeight || boulle.offsetLeft+boulle.offsetWidth >= window.innerWidth){
        boulle.style.left = "50px";
        boulle.style.bottom = "50px";
        boulle.style.top = "auto";
        boulle.setAttribute("onmousedown", "MouseDown()");
        clearInterval(inter_animation);
    }
}

function Stop(){
    document.removeEventListener("mousemove", Move);
    clearInterval(inter_frame);
    calcul_vecteur();
    let boulle = document.getElementById("boulle");
    boule_x = boulle.offsetLeft;
    boule_y = boulle.offsetTop;
    inter_animation = setInterval(animation,17);
    document.removeEventListener("mouseup", Stop);
    boulle.removeAttribute("onmousedown");
}

function AttribuerValeurs(){
    let deja_utiliser;
    let valeurs = [];
    let temp;
    temp = rand(10);
    document.getElementById("0").innerHTML = temp
    valeurs.push(temp)
    for(let i = 1; i<10; i++){
        deja_utiliser = false
        temp = rand(10)
        for(let j = 0; j<valeurs.length; j++){
            if(valeurs[j] == temp){
                deja_utiliser = true;
            }
        }
        while(deja_utiliser){
            deja_utiliser = false
            temp = rand(10)
            for(let k = 0; k<valeurs.length; k++){
                if(valeurs[k] == temp){
                    deja_utiliser = true;
                }
            }
        }
        valeurs.push(temp)
        document.getElementById(""+i+"").innerHTML = temp;
    }
}


function rand(second_intervalle){
    return Math.trunc(Math.random()*second_intervalle);
}

setTimeout(AttribuerValeurs, 10)