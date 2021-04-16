// Prueba 1

let pesoJuan = 92;
let pesoMarcos = 78;
let alturaJuan = 1.95;
let alturaMarcos =  1.69;

let marcosIMC = pesoMarcos/(alturaMarcos**2);
let juanIMC = pesoJuan/(alturaJuan**2);

let marcosMayorIMC = marcosIMC > juanIMC;

console.log('Prueba 1 \n')
if(marcosMayorIMC)console.log(`¡El IMC de Marcos (${marcosIMC}) es más alto que el de Juan (${juanIMC})!`);
else console.log(`¡El IMC de Juan (${juanIMC}) es más alto que el de Marcos (${marcosIMC})!`);

// Prueba 2

pesoJuan = 85;
pesoMarcos = 95;
alturaJuan = 1.76;
alturaMarcos =  1.88;

marcosIMC = pesoMarcos/(alturaMarcos**2);
juanIMC = pesoJuan/(alturaJuan**2);

marcosMayorIMC = marcosIMC > juanIMC;

console.log('\nPrueba 2 \n')
if(marcosMayorIMC)console.log(`¡El IMC de Marcos (${marcosIMC}) es más alto que el de Juan (${juanIMC})!`);
else console.log(`¡El IMC de Juan (${juanIMC}) es más alto que el de Marcos (${marcosIMC})!`);