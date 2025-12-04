let navbar;
function CheckScrollY(){
    navbar = document.getElementById("navbar");
    if(window.scrollY > 20){
        HideNavbar();
    }
    else{
        ShowNavbar();
    }
}

function ShowNavbar(){
    navbar.removeAttribute("hidden");
}

function HideNavbar(){
    navbar.setAttribute("hidden", true);
}

//Recuperation de la position de la souris

document.addEventListener("mousemove", Navbar);

let timeouts = [];
function Navbar(e){
    let MouseY = e.clientY;
    if(window.scrollY > 20){
        if(MouseY <= 50){
            ShowNavbar();
            for(let i = 0; i < timeouts.length; i++){
                clearTimeout(timeouts.shift());
            }
        }
        else if((navbar.getAttribute("hidden") == null || navbar.getAttribute("hidden") == "") && timeouts.length < 1){
            timeouts.push(setTimeout(HideNavbar, 2000));
        }
    }
}

