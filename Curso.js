/*
! Variables 

let profesor = "Rodrigo" //La variable let Si se puede modificar
let edad = 19

!Para modificar un let
profesor = "Rodri"
edad = 20
const nombre = "Pedro" //La variable const NO se puede modificar
!Para se cambiada hay que cambiar de const a let la variable
?Siempre crear la variables en const

!Para definir una variable de 2 palabras se escribe todo junto y con mayuscula la primera letra
const nombreDeCurso = "JavaScript" //Si la variable esta entre "" es string (cadena de texto)
const anioDeNaciomiento = 2005 // Si es un numero se escribe solo y es in integer



! Operaciones con variables integer (numero)

const numero1 = 10;
const numero2 = 20;
const numero3 = 30;
const numero4 = 40;

const resultadoSuma = numero1 + numero2; //Suma
const resultadoResta = numero3 - numero1; //Resta
const resultadoMultiplicacion = numero1 * numero2; //Multiplicacion 
const resultadoDivicion = numero3 / numero1; //Divicion 

const resultadoSuma2 = numero1 + numero2 * numero3 / numero4;

! Operaciones con variables string (Texto)

const nombre1 = "Pepe";
const nombre2 = "Juan"
const apellido = "Rodriguez";
const espacio = " ";

const nombreCompleto = nombre1 + apellido; //PepeRodriguez
const nombreCompleto1 = nombre1 + nombre2 + apellido; //PepeJuanRodriguez

const nombreCompletoConEspacios = nombre1 + espacio + nombre2 + espacio + apellido; //Pepe Juan Rodriguez
const nombreCompletoConEspacios1 = nombre1 + " " + nombre2 + " " + apellido; //Pepe Juan Rodriguez

console.log(profesor)

console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMultiplicacion);
console.log(resultadoDivicion);



! Prompt con string

const nombre = prompt("Ingrese el nombre");
const apellido = prompt("Ingrese el apellido");

const nombreCompleto = nombre + " " + apellido;
console.log("Bienvenido " + nombreCompleto);


! Prompt con integer
!agregamos paraseInt para que me los convierta a integer 
const numero1 = parseInt(prompt("Ingrese un numero"));
const numero2 = parseInt(prompt("Ingrese otro numero"));

const resultadoSuma = numero1 + numero2;

console.log(resultadoSuma);




! Alert
const numero1 = parseInt(prompt("Ingrese un numero"));
const numero2 = parseInt(prompt("Ingrese otro numero"));

const resultadoSuma = numero1 + numero2;

alert("El resultado de la suma es: " + resultadoSuma); //Se lo muestrta directo a la persona




! Decimales con prompt y parseFloat

const numero = parseFloat(prompt("Ingrese un numero"));
const numero1 = parseFloat(prompt("Ingrese un numero"));

const resultadoNumero = numero + numero1;//Muestra el numero con coma
const resultadoEntero = parseInt(numero + numero1);//Muestra el numero entero 

console.log(resultadoNumero);
console.log(resultadoEntero);

! Condicionales 
if (true){
    const nombre = prompt("Ingrese el nombre");
    console.log("Hola " + nombre)
}

const anio = prompt("Ingrese el año");

if (anio == 2024){
    console.log("El año es 2024")
}

if (anio == 2025){
    console.log("El año es 2024")
} else{
    console.log("El año no es 2024")
}

const anio = prompt("Ingrese el año");


if (anio == 2024){
    console.log("El año es 2024");
} else if ( anio == 2025) {
    console.log("El año es 2025");
} else if ( anio == 2026) {
    console.log("El año es 2026");
} else {
    console.log("El año no es ni 24, 25, 26");
}



! Operadoes logicos

! Es distinto
const numero = 15

if (numero != 10){
    console.log("El numero es distinto de 10")
}

! Mayor, Menor o Igual que

if (numero >  5){
    console.log("El numero es mayor a 5")
}

if (numero < 20){
    console.log("El numero es menor a 20")
}

if (numero >=5){
    console.log("El numero es mayor a 5")
}

if (numero <= 20){
    console.log("El numero es menor o igual a 20")
}
! Operador AND

const nombre = prompt("Ingresar el nombre")
const apellido = prompt("Ingresar el apellido")

if ((nombre == "Pepe") && (apellido == "Rodriguez")){// Las dos condiciones tienen que ser verdaderas
console.log("Bienvenido Pepe Rodriguez")
}

! Operadore OR

if ((nombre == "Pepe") || (nombre == "Juan")){
    console.log("Bienvenido Juan o Pepe")
}
! Operador AND y OR Conjuntos

! Operadores AND conjuntos
const nombre = prompt("Ingrese un nombre")
const apellido = prompt("Ingrese un apellido")
const edad = prompt("Ingrese la edad")

if (
    (nombre == "Pepe") && 
    (apellido == "Rodriguez") && 
    (edad >= 18)
){
    console.log("Bienvenido Pepe Rodrigue, que tiene mas de 18")
}

! Operadores OR conjuntos
const nombre = prompt("Ingrese un nombre")

if (
    (nombre == "Pepe") ||
    (nombre == "Pedro") ||
    (nombre == "Marco")
){
    console.log("Bienvenido Pepe, Pedro, Marcos")
}

! Combinar AND y OR
const nombre = prompt("Ingrese un nombre")
const edad = prompt("Ingrese la edad")

if (
    ((nombre == "Pepe") || (nombre == "Juan")) && (edad >= 18)
){
    console.log("Bienvenido Pepe, Pedro, Marcos")
}

! Operadores estrictos
!Iguales
const numero1 = 15
const numero2 = "15"

if (numero1 == numero2){ //Solo toma diferente el valor del numero
    console.log("Son Iguales")
}

if (numero1 === numero2){ //Toma de diferente el valor del num y el tipo de dato
    console.log("Son Iguales")
}

!Distintos
const numero1 = 15
const numero2 = "15"

if (numero1 != numero2){
    console.log("Son distintos")
}

if (numero1 !== numero2){
    console.log("Son estric distintos")
}

! Operador NOT

const numero1 = 20
const esNumero20 = (numero1 === 20)

if (!esNumero20) {
    console.log("El numero es 20")
}

! Operador de contador

!i++ es lo mismo que poner (i = i + 1)

for (let i = 1; i <= 5; i++){
    console.log(i)
}

for (let i = 1; i <= 5; i++){
    const nombre = prompt("Ingrese nombre")
    console.log(nombre)
}

for (let i = 0; i < 5; i++){
    const nombre = prompt("Ingrese nombre")
    
    if (nombre == "Matias") {
        console.log("Se ingreso Matias")
        break;//Hace que si se cumple la condicion salga del bucle repetidor directamente sin que alla terminado
    }
    
    console.log("Hola " + nombre)
}

for (let i = 0; i < 5; i++){
    const nombre = prompt("Ingrese nombre")

    if (nombre == "Matias" || nombre == "Pedro") {
        continue; //si se ingresa matias o pedro no los cuenta y pasa a iniciarse de nuevo el for 
    }

    console.log("Hola " + nombre)
}

! Operador de Bucle 

let nombre = prompt("Ingrese nombre")

while(nombre != "SALIR"){
    console.log("Su nombre es: " + nombre)
    
    nombre = prompt("INgrese un nuevo nombre, o SALIR para terminar")
}
console.log("Fin ciclo")
let opcion = parseInt(prompt("Ingrese la opcion 1-Atencion al cliente, 2-Soporte tecnico, 3-Ventas, 0-Salir"))

while(opcion != 0){
    
if (opcion == 1){
    console.log("Atencion al cliente")
} else if(opcion == 2){
    console.log("Soporte tecnico")
} else if(opcion == 3){
    console.log("Ventas")
} else{
    console.log("Opcion invalida")
}
opcion = parseInt(prompt("Ingrese la opcion 1-Atencion al cliente, 2-Soporte tecnico, 3-Ventas, 0-Salir"))
}

let opcion = parseInt(prompt("Ingrese la opcion 1-Atencion al cliente, 2-Soporte tecnico, 3-Ventas, 0-Salir"))


while(opcion != 0){
    switch (opcion){
        case 1:
            console.log("Atencion al cliente")
            break;
        case 2:
            console.log("Soporte tecnico")
            break;
        case 3:
            console.log("Ventas")
            break;
        default:
            console.log("Opcion invalida")
            break;
    }
    opcion = parseInt(prompt("Ingrese la opcion 1-Atencion al cliente, 2-Soporte tecnico, 3-Ventas, 0-Salir"))
}

! Funciones 

function imprimirNombre(){
    const nombre = prompt("Ingrese nombre")
    console.log("Su nombre es: " + nombre)
}

imprimirNombre()//para que la funcion pudo funcionar, se la tiene que llamar
imprimirNombre()//puedo llamar a la funcio cuantas veces yo quiera

!Parametros
function saludar(nombre){
    console.log("Hola su nombre es " + nombre)
}
const nombreDePersona = prompt("Ingrese nombre")

saludar (nombreDePersona)

!Funcion con dos parametros

function saludar (mensaje, nombre){
    console.log(mensaje + " " + nombre)
}

saludar("Hola su nombre es:", "Rodrigo")
saludar("Hi", "Rodrigo")

!Funciones con numeros

function sumar(numero1, numero2){
    const resultado = numero1 + numero2
    console.log("El resultado es: " + resultado)
}

sumar(10, 5)//la fincion no detecta tipo de dato!!

function obtenerSaludo(mensaje, nombre){
    return mensaje + " " + nombre
}

const saludo = obtenerSaludo("Hola que tal, Miguel")
console.log(saludo)

function multiplicar(numero1, numero2){
    const resultado = numero1 * numero2
    return resultado
}
function restar(numero1, numero2){
    return numero1 - numero2
}

const resultadoMultiplicacion = multiplicar(5, 2)
const resultadoResta = restar(resultadoMultiplicacion, 3)

console.log(resultadoResta)

!Funciones anonimas

const multiplicar = function(numero1, numero2){
    return numero1 * numero2
}

const numero1 = parseInt(prompt("Ingrese numero"))
const numero2 = parseInt(prompt("Ingrese otro numero"))

const resultadoMultiplicacion = multiplicar(numero1, numero2)
console.log(resultadoMultiplicacion)

!Funciones flecha
!la tipica
const multiplicar = function(numero1, numero2){
    return numero1 * numero2
}

!modo felcha con retung
const multiplicar = (numero1, numero2) => numero1 * numero2

const resultadoMultiplicacion = multiplicar(25, 2)
console.log(resultadoMultiplicacion)
!flecha sin retung

const saludar = (nombre) => {
    console.log("hola como esats" + nombre)
}
saludar()




! OBJETOS

!para escribir elemenos de un mismo concepto podemos utilizar objetos

const nombre = "Pepe"
const apellido = "Rodriguez"
const edad = 20

!ahora mas simplificado

const  persona = {
    nombre: "pepe",
    apellido: "rodriguez",
    edad: 21,
}
console.log(persona)

!acceder a las propiedades del elemento

console.log(persona.apellido)
console.log(persona["apellido"] )

! accedear a propiedeades que no existen

console.log(persona.atrhdr)
console.log(persona["axfgnrs"] )

!Modificar propiedades de un objeto

const  persona = {
    nombre: "pepe",
    apellido: "rodriguez",
    edad: 21,
}
persona.edad = 31
persona.edad++

console.log(persona.edad)

!Crear objetos con prompt
?forma 1
const producto = {
    nombre: "",
    precio: 0,
    stock: 0,
}

const nombreProducto = prompt("Ingrese nombre de producto")
const precioProducto = parseFloat(prompt("Ingrese precio"))
const stockProducto = parseInt(prompt("Ingrese stock"))

producto.nombre = nombreProducto
producto.precio = precioProducto
producto.stock = stockProducto

console.log(producto)

?forma 2

const nombreProducto = prompt("Ingrese nombre de producto")
const precioProducto = parseFloat(prompt("Ingrese precio"))
const stockProducto = parseInt(prompt("Ingrese stock"))

const producto = {
    nombre: nombreProducto,
    precio: precioProducto,
    stock: stockProducto,
}
console.log(producto)

!Constructores

function Persona (nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.trabajo = "Programador" //ponemos ingresarle una propiedad fija
}

const persona1 = new Persona("rodrigo", "dell orto", 20)
const persona2 = new Persona("pepe", "juan", 40)

console.log(persona1)
console.log(persona2)

function Persona (nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    
    this.saludar = function(nombre){
        console.log("Hola " + nombre)
    }
}

const persona1 = new Persona("Pepe, Gonzales, 20")

console.log(persona1)
persona1.saludar("Lautaro")

! Objeto string

const nombre = "Hola Pepe" 

console.log(typeof nombre)

?Utilizar propiedades y metodos de string

console.log(nombre.length)//muestra cantidad de caracteres 
console.log(nombre.toUpperCase())//pasa todo a mayusculas
console.log(nombre.toLowerCase())//pasa todo a minusculas
console.log(nombre)

const nuevoString = nombre.concat(" ¿Como estas?")
console.log(nuevoString)

const numero = 5

console.log(typeof numero)

! Operador IN y FOR IN

const persona = {
    nombre: "Pepe",
    edad: 20,
    apellido: "Gonzales"
}

console.log("nombre" in persona)//me devuelve true o false

for(const nombrePropiedad in persona) {
    console.log("Propiedad: " + nombrePropiedad + " -Valor: " + persona[nombrePropiedad])
}

!CLASES

function Persona (nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    
    this.saludar = function(nombre){
        console.log("Hola " + nombre)
    }
}

class Persona {
    consturctor (nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    saludar(nombre) {
        console.log("Hola! " + nombre)
    }
    despedir(nombre) {
        console.log("Adios! " + nombre)
    }
}

const persona1 = new Persona("Pepe", "Gonzales", 40)

console.log(persona1)

persona1.saludar("Lautaro")
persona1.despedir("Rodrigo ") 

//!Valores de referencia

//copia valores de variables
let numero = 10
let numero2 = numero

numero = 20

console.log(numero) //20
console.log(numero2) //10

//ahora con objetos

let persona = {
    nombre: "Gonzalo",
    edad: 30,
}

let persona2 = persona

persona.nombre = "Pepe"

console.log(persona.nombre)
console.log(persona2.nombre)


//! ARRAY

const nombres = ["Pedro", "Lucas", "Maria"]

const segundoNombre = nombres[1]

const saludo ="Hola " + segundoNombre + " como estas"

console.log(saludo)

//!Reecorrer lista

const nombreDeProductos = [
    'Yogurt',
    'Leche',
    'Manteca',
    'Lechuga'
]

// console.log(nombreDeProductos.length) nos devuelve la cantidad de elementos 

for(let i = 0; i < nombreDeProductos.length; i++) {
    console.log(nombreDeProductos[i])
}

//! Agregar elelemntos a una lista

const nombres = ["Pedro", "Rodri"]

console.log(nombres)

nombres.push("Mariano") //el push agrega los elementos al final de la lista
nombres.push("Rodri")
nombres. push("Toto", "Pepe")

nombres.unshift("Lucas") //el unshift agrega los elementos al principio de la lista

console.log(nombres)

//! Eliminaar elementos del array

const productos = [
    'Yogurt',
    'Leche',
    'Manteca',
    'Lechuga'
]

productos.pop()// elimina el ultimo elemento de la lista

productos.shift()// elimina el primer elemento de la lista

console.log(productos)

//! Splice

const productos = [
    'Yogurt',
    'Leche',
    'Manteca',
    'Lechuga',
    'Papa',
    'Cebolla'
]

//productos.splice(1, 3) //elimina de tal elemento a al elemento

//productos.splice(3) //asi elimina todo del elemento 3 hasta el final

productos.splice(0, 2) //elimina los 2 primeros elementos

productos.splice(2, 0) //no elimina nada

console.log(productos)

!Join

const productos = [
    'Yogurt',
    'Leche',
    'Manteca',
    'Lechuga',
    'Papa',
    'Cebolla'
]

const listaDeProductos = productos.join(" -") //separa cada elemento de la lista por lo que le indiquemos, no altera el array

console.log(listaDeProductos)

!Concat


const productos1 = [
    "Tomate",
    "Leche"
]
const productos2 = [
    "Jabon",
    "Papa"
]

Forma 1 no
for(let i = 0; i < productos2.length; i++) {
    productos1.push(productos2[i])
}

console.log(productos1)

Forma 2 si
const producto = productos1.concat (productos2) // concatena los elementos, no altera el array

console.log(producto)

!Slice

const productos = [
    'Yogurt',
    'Leche',
    'Manteca',
    'Lechuga',
    'Papa',
    'Cebolla'
]

const productosDeMedio = productos.slice(1, 4) //

const productosDeMedio = productos.slice(1) // copia hasta el final

const productosDeMedio = productos.slice(2, 0) //no devuelve nada


console.log(productosDeMedio)

!IndexOf

const productos = [
    'yogurt',
    'leche',
    'manteca',
    'lechuga',
    'papa',
    'cebolla'
]

const nombreBusca = prompt("Ingrese Producto")

console.log(
    productos.indexOf(
        nombreBusca.toLowerCase()
    )
) //indica donde esta posicionado el elemento

!Includes

const nombre = [
    'pedro',
    'juan',
    'miguel'
]

console.log(
    nombre.includes('juan') //indica si se encuentra a o no el elemento
)

!Reverse

const nombre = [
    'yogurt',
    'leche',
    'manteca',
    'lechuga',
    'papa',
    'cebolla'
]

nombre.reverse()//altera el array


console.log(nombre)

! ARRAYS CON OBJETOS


Version 1
? Objetos

class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }
}

? Funciones
function encontrarProducto(nombreProducto) {

    let indice = -1

    for(let i = 0; i < listaProducto.length; i++) {

        const producto = listaProducto[i]

        if(producto.nombre === nombreProducto) {
            indice = i
            break;
        }
    }
    
    return indice
}

Version 2 con FOR OF

class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }
    calcularSubtotal(cantidad) {
        return cantidad * this.precio
    }
}

function encontrarProducto(nombreProducto) {
    let elemento = false
    
    for(const producto of listaProducto) {
        if(producto.nombre.toLowerCase() === nombreProducto.toLowerCase()) {
            elemento = producto
            break;
        }
    }
    
    return  elemento
}

//Inicio del programaro

const productos1 = new Producto("Arroz", 15)
const productos2 = new Producto("Jabon", 25)
const productos3 = new Producto("Tomate", 50)

const listaProducto = [
    productos1,
    productos2,
    productos3,
]

let nombreProducto = prompt("Ingrese el nombre del producto - ESC PARA SALIR")

while(nombreProducto !== "ESC" ) {
    
const productoEncontrado = encontrarProducto(nombreProducto)

if(productoEncontrado !== false) {
    
const cantidad = parseInt(prompt("Ingrese la cantidad"))
const subTotal = productoEncontrado.calcularSubtotal(cantidad)
alert("EL SUBTOTAL ES: $" + subTotal)

} else {
    alert("Producto No Encontrado")
}
nombreProducto = prompt("Ingrese el nombre del producto - ESC PARA SALIR")
}


//Sin funciones de orden superior

function mayorQueDiez(numero) {
    return numero > 10
}
function mayorQueVeinte(numero) {
    return numero > 20
}
function mayorQueQuince(numero) {
    return numero > 15
}
*/

function mayorQue (numeroAComparar) {
    return function(numero) {
        return numero > numeroAComparar
    }
}

const mayorQueDiez = mayorQue(10)
const mayorQueVeinte = mayorQue(20)
const mayorQueQuince = mayorQue(15)

console.log(mayorQueDiez)
//Inicio del programa

const numero = 20

console.log(mayorQueDiez(numero)) 
console.log(mayorQueVeinte(numero)) 
console.log(mayorQueQuince(numero)) 












