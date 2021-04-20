const persona ={
    //creación de campos: clave valor
    nombreCompleto:['Marcos Muñoz','Juan Lopez'],
    masa: [78,92],
    altura: [1.69, 1.95],
    calcIMC:function(){
        marcosIMC=this.masa[0]/((this.altura[0])**2);
        juanIMC= this.masa[1]/((this.altura[1])**2);
        if (marcosIMC > juanIMC){
            return console.log(`El IMC de Marcos Muñoz ${marcosIMC.toFixed(2)} es más alto que el de Juan Lopez ${juanIMC.toFixed(2)} `)
        } else {
            return console.log(`El IMC de Juan Lopez ${juanIMC.toFixed(2)} es más alto que el de Marcos Muñoz ${marcosIMC.toFixed(2)} `)}
        }
      
    }
console.log(persona.calcIMC()); // Imrpimir el método 