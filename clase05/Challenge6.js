function calcPropina(valorFactura,propinas,totales){
    let propina = ((valorFactura >= 50) && (valorFactura<= 300)) ? valorFactura*0.15 : valorFactura*0.2;
    console.log(`El valor de la factura es ${valorFactura}, la propina es ${propina} y el valor total es ${propina+valorFactura}`);
    return propina
}
  
calcPropina (100)
let facturas = [ 125, 555,44];
var propinas=[];
var total=[];
facturas.forEach(element => { // itera sobre cada elemento del array facturas 
    propinas.push(calcPropina(element));
    total.push(calcPropina(element)+element);
})
console.log(propinas);
console.log(total);


