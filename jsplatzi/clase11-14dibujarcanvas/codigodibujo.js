var d = document.getElementById("Lamebotas");
var eCantidadLineas = document.getElementById("cantidadLineas");
var boton = document.getElementById("Boton");
boton.addEventListener("click", dibujoPorClick);
var lienzo = d.getContext("2d");
// var limiteLineas = 30;
// var baseLineas = 0;
// var yi,xf;
// var xi,yf;
// var  azul = "blue";

//  for(baseLineas = 0; baseLineas<30; baseLineas++){

//      yi = 10 * baseLineas;
//      xf = 10 * (baseLineas + 1);
//      dibujarLinea(azul, 0, yi, xf, 300);
//     dibujarLinea("red", 300, 300-yi, 300-xf, 0);
//     dibujarLinea("gold",300-yi,0,0,xf);
//     dibujarLinea("pink",yi,300,300,300-xf);
//     dibujarLinea("black",yi,300,300-yi,0);
//      console.log("Linea numero " + baseLineas);
    
//  }

//  var actual = prompt("En que año te gustaria saber tu edad?");
//  var nacimiento = prompt("Cual es tu año de nacimiento?");
//  var edad = actual - nacimiento;
//  document.write("Tu edad en el año " + actual + " es: <strong>" + edad + "</strong>");

// while(baseLineas<limiteLineas){
//     yi = 10 * baseLineas;
//     xf = 10 * (baseLineas + 1);
//     dibujarLinea(azul, 0, yi, xf, 300);
//     console.log("Linea numero " + baseLineas);
//     //baseLineas = baseLineas + 1;
//     baseLineas++;
    
// }

// while(baseLineas<limiteLineas){
//     yi = 10 * baseLineas;
//     xf = 10 * (baseLineas + 1);
//     dibujarLinea(azul, 0, yi, xf, 300);
//     console.log("Linea numero " + baseLineas);
//     //baseLineas = baseLineas + 1;
//     baseLineas++;
    
// }
console.log(d.width);
dibujarLinea("black", 1, 1, 1, 300);
dibujarLinea("black", 0, 299, 300, 299);
dibujarLinea("black", 0,1,300,1);
dibujarLinea("black", 299,0,299,300);


function dibujarLinea(color, xi, yi, xf, yf){

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi,yi);
    lienzo.lineTo(xf,yf);
    lienzo.stroke();
    lienzo.closePath();

}

function dibujoPorClick(){

    cantidadLineas = parseInt(eCantidadLineas.value);
    console.log(cantidadLineas);
alert("Imprimiremos " +cantidadLineas+ " lineas");

var yi,xf;
var xi,yf;
var  azul = "blue";
var espacio = d.width/cantidadLineas;

 for(baseLineas = 0; baseLineas<cantidadLineas; baseLineas++){

     yi = espacio * baseLineas;
     xf = espacio * (baseLineas + 1);
     dibujarLinea(azul, 0, yi, xf, 300);
    dibujarLinea("red", 300, 300-yi, 300-xf, 0);
    dibujarLinea("gold",300-yi,0,0,xf);
    dibujarLinea("pink",yi,300,300,300-xf);
    dibujarLinea("black",yi,300,300-yi,0);
     console.log("Linea numero " + baseLineas);
    
     dibujarLinea("black", 1, 1, 1, 300);
dibujarLinea("black", 0, 299, 300, 299);
dibujarLinea("black", 0,1,300,1);
dibujarLinea("black", 299,0,299,300);

 }


}