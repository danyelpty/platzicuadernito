var canvas = document.getElementById("area");
var papel = canvas.getContext("2d");


dibujarLinea("red", 149, 149,151, 151, papel);

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT:39
};
var x = 150;
var y = 150;

function dibujarLinea(color, xi, yi, xf, yf, lienzo){

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xi,yi);
    lienzo.lineTo(xf,yf);
    lienzo.stroke();
    lienzo.closePath();

}

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(tecla){

    console.log("tumale");
    
    // if(tecla.keyCode == teclas.UP){
    //     console.log("Presionaste boton hacia arriba");

    // }
    // if(tecla.keyCode == teclas.DOWN){
    //     console.log("Presionaste boton hacia abajo");

    // }
    // if(tecla.keyCode == teclas.LEFT){
    //     console.log("Presionaste boton hacia la izquierda");

    // }
    // if(tecla.keyCode == teclas.RIGHT){
    //     console.log("Presionaste boton hacia la derecha");

    // }
    
    switch(tecla.keyCode){

        case teclas.UP:
            console.log("Presionaste boton hacia arriba");
        break;
        case teclas.DOWN:
            console.log("Presionaste boton hacia abajo");
        break;
        case teclas.RIGHT:
            console.log("Presionaste boton hacia la derecha");
        break;
        case teclas.LEFT:
            console.log("Presionaste boton hacia la izquierda");
        break;
        default:
            console.log(tecla.keyCode, tecla.code);
        break;


    }


}