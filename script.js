/* Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt 
pidiendo otro número, finalmente el programa muestra una alerta con el resultado de la suma. */

let valor1 = prompt('Escriba un número', 0);
let valor2 = prompt('Escriba otro número', 0);

function suma(valor1, valor2) {
    let resultado;
    resultado= parseInt(valor1) + parseInt(valor2);
    alert("El resultado es " + resultado);
}
suma(valor1, valor2)


/* Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y 
el programa muestre en una alerta la temperatura en Fahrenheit. */

let tcelsius = prompt('Escriba la temperatura en celsius', 0);

function conversor(tcelsius) {
    let tfarenheit;
    tfarenheit= parseFloat(tcelsius)*9/5 + 32 ;
    alert("La temperatura en Farenheit es " + tfarenheit);
}
conversor(tcelsius)


/* Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5 */

let numero = prompt('Escriba un número', 0);

function dividirpordiez(numero) {
    let numerodividido;
    numerodividido= parseFloat(numero)/10;
    alert("El número dividido diez es " + numerodividido);
}
dividirpordiez(numero)

/* Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a */

const a = [1,2,3];
alert("Tipo: " + typeof(a));

/* Crear un programa que determine si un número introducido en un Prompt es par o no, 
la respuesta será mostrada en una alerta. */

let numeropar = prompt('Escriba un número', 0);

function par(numeropar) {
    if (numeropar%2==0) {
        alert("El numero es par");
    } else {
        alert("El numero es impar");
    } 
}
par(numeropar)


/* Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, 
mostrar el resultado con console.log

 */

let divisibleporcinco = prompt('Escriba un número', 0);

function divcinco(divisibleporcinco) {
    if (divisibleporcinco%5==0) {
        alert("El numero es divisible por 5");
    } else {
        console.log("El numero no es divisible por 5");
    } 
}
divcinco(divisibleporcinco)


/* Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, 
mostrar el resultado con console.log

 */

let divi = window.prompt('Escriba un número', 0);

function divisible(divi) {
    if (divi%5==0 && divi%11==0) {
        console.log("El numero es divisible por 5 y por 11");
    } else {
        console.log("El numero no es divisible por 5 ni por 11");
    } 
}
divisible(divi)


/* Crear un programa que le pida al usuario dos números en un Prompt y luego muestre 
en un alerta el número mayor. */

let num1 = prompt('Escriba un número', 0);
let num2 = prompt('Escriba otro número', 0);

function mayor(num1, num2) {
    if (num1>num2) {
        alert("El numero " + num1 + " es mayor");
    } else {
        alert("El numero " + num2 + " es mayor");
    } 
}
mayor(num1, num2)


/* Crear un programa que le pida al usuario primero un números al usuario a través de un prompt y luego un 
segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un 
if ternario. */

let n1 = prompt('Escriba un número', 0);
let n2 = prompt('Escriba otro número', 0);

var mayor = n1>n2? alert(n1) : alert(n2);


/* Crear un programa que determine si un string introducido por un usuario empieza 
con un número o con una letra. */







/* Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si 
el triángulo es válido o no. */

let angulo1 = prompt('Ángulo 1', 0);
let angulo2 = prompt('Ángulo 2', 0);
let angulo3 = prompt('Ángulo 3', 0);

var mayor = angulo1+angulo2+angulo3? alert("El triángulo es válido") : alert("El triángulo no es válido");


/* Determinar si una palabra empieza con mayúscula o no. */






/* Determinar si un año dado es bisiesto. */

let year = prompt('Inserte el año', 0);

var bisiesto = year%4==0? alert("El año es bisiesto") : alert("El año no es bisiesto");


/* Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y 10, 
el usuario , luego a el usuario se le pedirá que introduzca un número en un popup para intentar adivinarlo. 
Si la entrada del usuario coincide con el número de conjetura, el programa mostrará un mensaje de 
"buen trabajo" de lo contrario mostrará un mensaje de "No corresponde" */








// Obtener edad

let edad = prompt('Edad', 0);

function adulto(edad) {
if(edad < 13) {
    console.log("Es niño");
}else if(edad > 18){
     console.log("Es adulto");
} else{
     console.log("Es adolescente");
}
}

adulto(edad)


/* Negar las siguientes expresión de forma de mantener la tabla de verdad, crear el programa que muestre 
el valor de la expresión a medida que se cambia los valores de a y b.

!a && !b
!a || !b */














/* Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt.

 */

let count=0;
let n = prompt('Escriba un número', 0);

while(count<n) {
    count++
    console.log(count);
}

count=0

