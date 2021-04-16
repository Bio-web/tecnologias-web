// Prueba 1

const calcPromedio = (puntuacion1, puntuacion2, puntuacion3) => (puntuacion1 + puntuacion2 + puntuacion3)/3;

let puntajeDelfines = calcPromedio(44, 23, 71);
let puntajeKoalas = calcPromedio(65, 54, 49);

const verificarGanador = function(promDelfines, promKoalas)
{
    if(promDelfines >= 2*promKoalas) console.log(`Los Delfines ganan (${promDelfines} contra ${promKoalas})`);
    else if(promKoalas >= 2*promDelfines) console.log(`Los Koalas ganan (${promKoalas} contra ${promDelfines})`);
    else console.log('Ningún equipo gana');
    console.log('\n');
}

verificarGanador(puntajeDelfines, puntajeKoalas);

// Prueba 2

puntajeDelfines = calcPromedio(85, 54, 41);
puntajeKoalas = calcPromedio(23, 34, 27);

verificarGanador(puntajeDelfines, puntajeKoalas);