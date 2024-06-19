const saludar=require('./modulosfuncionales/saludo')
const operaciones=require('./modulosfuncionales/operaciones')
const{multiplicar}=require('./modulosfuncionales/operaciones')
const fs=require('fs')

let inicio=100;
let fin=200;
let añosTotales=operaciones.sumar(inicio,fin)
console.log("Estos son los años totales "+añosTotales);
let añosMultiplicados=multiplicar(inicio,fin);
console.log("Estos son los años multiplicados"+añosMultiplicados);
console.log(operaciones.sumar(10,35));
console.log(operaciones.restar(10,35));
console.log(operaciones.multiplicar(10,35));
console.log(operaciones.numeros);
console.log(saludar('Juan'));
console.warn("por favor incluir el nombre");
console.error(new Error("el divisor no puede ser cero"));
console.table(operaciones.numeros);




//*******************************/

//manejo de archivos

fs.writeFile('./modulosfuncionales/archivo.txt','Hola mundo',function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('El archivo fue creado')
}
});

fs.readFile('./modulosfuncionales/archivo.txt',function(error,contenido){
    if(error){
        console.log(error);

    }
    else{
        console.log(contenido.toString());
    }
});

fs.rename('./modulosfuncionales/archivo.txt','./modulosfuncionales/archivonuevo.txt',function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log('el archivo fue renombrado');
    }   

});

fs.appendFile('./modulosfuncionales/archivonuevo.txt'," nuevo texto adicionado al archivo",function(error){
    if(error){
        console.log(error);

    }
    else{
        console.log('el archivo fue modificado');
    }   

});
fs.unlink('./modulosfuncionales/archivonuevo.txt',function(error){
    if(error){
        console.log(error);

    }
    else{
        console.log('el archivo fue eliminado');
    }   
});