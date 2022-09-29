var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById('mi_canva');
ctx = canvas.getContext("2d");
color = "blue";
ancho_de_linea=1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    ancho_de_linea=document.getElementById("ancho_de_linea") .value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth =ancho_de_linea
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}