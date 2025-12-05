let MouseY
let MouseX
document.addEventListener("mousemove", GetMouseCoords);


function GetMouseCoords(e){
    let boulle = document.getElementById("boulle");
    MouseX = e.clientX
    MouseY = e.clientY
    console.log(MouseX, MouseY)
    boulle.style.top = MouseY+"px"
    boulle.style.left = MouseX+"px"
}

