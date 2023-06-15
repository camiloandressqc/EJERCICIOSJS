// function myFunction(p1,p2){
// return p1*p2
// }

// var n1 = 5, n2 = 5;

// console.log(myFunction(n1,n2));

function calcularPrecio(precioBase,descuento){
    // la funcion calculara el precio final aplicando el descuento sobre el precio base

    // variable "DescuentoCalculado" para saber el valor neto de descuento.
    // variable "precioFinal" que calculara el precio final a pagar.
    let precioFinal, DescuentoCalculado;


    // Pregunta al profesor: a que 100 se refiere el documento del reto numero 1 js
    if(precioBase <= 0 || descuento < 0 || descuento > 100){
        console.log("Los valores ingresados son invalidos");
    }

    if(descuento == 0){
        return precioBase;
    }

    // en el documento faltaba una condicion y era si el precio es mayor a 0
    if(descuento > 0 && descuento <= 100 && precioBase > 0){
        descuento = descuento * 0.01;
        DescuentoCalculado = precioBase * descuento;
        precioFinal = precioBase - DescuentoCalculado;
        console.log("El precio final con descuento es "+precioFinal);
    }

}

// si el descuento es de 100, entonces el comprador no pagara nada
var precio = 10000, des = 30;

console.log(calcularPrecio(precio,des));