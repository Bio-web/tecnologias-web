let facturas = [22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52];
var propinas=[];
var total=[];

function calcPropina(valorFactura,propinas,totales){
    let propina = ((valorFactura >= 50) && (valorFactura<= 300)) ? valorFactura*0.15 : valorFactura*0.2;
    return propina
}

facturas.forEach(element => { // itera sobre cada elemento del array facturas 
    propinas.push(calcPropina(element));
    total.push(calcPropina(element)+element);
    console.log(`El valor de la factura es ${element}, la propina es ${calcPropina(element)} y el valor total es ${calcPropina(element)+element}`);
})
console.log(propinas);
console.log(total);

function calcPromedio (arr){
    suma = 0;
    arr.forEach (function(numero){
        suma += numero;
    });
    return console.log('La suma de todas las propinas es '+ suma.toFixed(2) + 'y el promedio es: ' + suma/(arr.length));
}


console.log(calcPromedio(propinas));
