/*
// alert('hola mundo');

// fuertemenete tipado - ie: java 
// String primerNombre = 'Andrés';
// int edad = 30;
// ...

// debilmente tipado - javascript
let primerNombre = 'Andrés';
let edad = 30;

console.log(primerNombre);

primerNombre = 'Juan';

console.log(primerNombre);

console.log(edad);

// camelCase
let segundoApellidoPaterno = 'Castillo';
let segundo_apellido = 'Castillo';

// let 3Nombre = '';
let $nombre = '';
// let no&mbre = '';

let PrimerNombre = '';

let nombre = '';
let primerNombrePersona = 'Andrés';
let nombre1 = '';


// tipos de datos
let edad = 30; // number
console.log(edad);
console.log(typeof edad);
edad = 'treinta';
console.log(edad);
console.log(typeof edad);

let indefinida;
console.log(indefinida);
console.log(typeof indefinida);

indefinida = null;
console.log(indefinida);
console.log(typeof indefinida);


// let, const y var
let variableCambiante = 1;
console.log(variableCambiante);
variableCambiante = 2;
console.log(variableCambiante);

const constante = 2;
console.log(constante);

var variableAntigua = '3'; // ya no se usa poco optimo


// operaciones matematicas
const year = 2020;
const edadAndres = 2020 - 1990;
console.log(edadAndres);

// operadores de asignacion
let x = 10;
console.log('x', x);
x = x + 10;
console.log('x', x);
x += 10; // -= *= /=
console.log('x', x);
x++;
x--;
x--;
console.log('x', x);

// + - / *
// 2 ** 3 -> 2 elevado a la potencia 3

const primerNombre = 'Andrés';
const segundoNombre = 'Felipe';
console.log(primerNombre + ' ' + segundoNombre);

console.log('Mi nombre es ' + primerNombre + ' ' + segundoNombre);

const templateLiteral = `Mi primer nombre es ${primerNombre} y mi segundo nombre es ${segundoNombre}`;
console.log(templateLiteral);

console.log('linea 1 \n\ linea 2');

console.log(`linea 1
linea 2`);

console.log(primerNombre.toUpperCase());


const edad = 17;

if (edad >= 18) {
    console.log('Puedo obtener la licencia de conducción');
} else if (edad >= 17) {
    console.log('puede aprender aconducir pero no obtendra licencia aún');
} else {
    console.log('aún no puedo aprender a conducir');
}


const year = '2020';
console.log(Number(year));
const edad = 30;
const edadString = String(edad);
console.log(edadString);
console.log(typeof edadString);

// Coerción
console.log('Yo tengo ' + 30 + ' años');
console.log('10' + '10');
console.log('10' + 3);
console.log('100' / '5');
console.log('100' > '5');
console.log(100 > 5);
console.log('100' < '5');
console.log('100' > 5);


// Falsy
// undefined
// null
// 0
// ''
// NaN

let variable = '';

if (variable) {
    console.log('Truthy');
} else {
    // ...
}
console.log('10' !== '10');
// == != === !==

// Operadores logicos
const tieneLicencia = true;
const tieneBuenavision = true;

console.log(tieneLicencia && tieneBuenavision);
console.log(tieneLicencia || tieneBuenavision);
console.log(!tieneLicencia);

if (tieneLicencia && tieneBuenavision) {
    console.log('es un buen conductor');
} else {
    console.log('no deberia conducir');
}

const estaCansado = false;

console.log(tieneLicencia && tieneBuenavision && estaCansado);

if (tieneLicencia && tieneBuenavision && !estaCansado) {
    console.log('es un buen conductor');
} else {
    console.log('no deberia conducir');
}

const edad = 11;

if (edad >= 18) {
    console.log('Puedo obtener la licencia de conducción');
} else if (edad >= 17) {
    console.log('puede aprender aconducir pero no obtendra licencia aún');
} else {
    console.log('aún no puedo aprender a conducir');
}

switch (edad) {
    case 10:
    case 11:
    case 12:
        console.log('es un niño');
        break;
    case 15:
        console.log('es un adolescente');
        break;
    case 18:
        console.log('es un adulto');
        break;
    default:
        console.log('')
}

if (edad < 10 && edad > 5) {}


const edad = 15;

if (edad > 18) {
    console.log('puede conducir');
} else {
    console.log('no puede conducir');
}

if (edad > 18) console.log('puede conducir')
else console.log('no puede conducir');

const respuesta = edad > 18 ? 'puede conducir' : 'no puede conducir';
console.log(respuesta);

console.log(`su edad es ${edad} y ${edad > 18 ? 'puede conducir' : 'no puede conducir'}`)

function logger() {
    console.log('Mi nombre es Andrés');
}

logger();

const cortarFruta = fruta => fruta * 4;

function hacerJugo(manzanas, naranjas) {
    const piezasManzana = cortarFruta(manzanas);
    const piezasNaranjas = cortarFruta(naranjas);
    const jugo = `Jugo con ${piezasManzana} piezas de manzanas y ${piezasNaranjas} piezas de naranjas`;
    return jugo;
}

const jugoDeNaranja = hacerJugo(0, 4);
console.log(jugoDeNaranja);

const jugoDeManzanaNaranja = hacerJugo(2, 4);
console.log(jugoDeManzanaNaranja);

// Declaración de funciones

console.log(calcEdad(1990));

function calcEdad(anioNacimiento) {
    return 2020 - anioNacimiento;
}

// función como expresión
// console.log(calcEdad2(1990));

const calcEdad2 = function (anioNacimiento) {
    return 2020 - anioNacimiento;
}

console.log(calcEdad2(1990));

// Función arrow
const calcEdad3 = anioNacimiento => 2020 - anioNacimiento;

console.log(calcEdad3(1990));

const calcEdad4 = (anioNacimiento, primerNombre) => {
    const edad = `La edad de ${primerNombre} es ${2020 - anioNacimiento}`;
    return edad;
}

console.log(calcEdad4(1990, 'Andrés'));
*/
