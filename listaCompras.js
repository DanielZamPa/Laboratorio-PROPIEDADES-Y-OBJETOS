const prompt = require("prompt-sync")();

function listaCompra(){
    this.productos = [];    
    this.agregar = function(ingreso){
        this.productos.push(ingreso)}
    this.mostrar = function(){
        console.log("Lista de compras: ", this.productos);
    }
}
let compra1 = new listaCompra();
let fin = false;
let error = false;
while(fin!=true){
    console.log("Agrege los productos deseados de la siguiente lista: ");
    console.log("1. Manzanas\n2. Peras \n3. Mandarinas");
    let ingreso = prompt("R: ");
    if (ingreso == 1){
        compra1.agregar("Manzanas")        
    }
    else if (ingreso==2){
        compra1.agregar("Peras")
    }
    else if (ingreso==3){
        compra1.agregar("Mandarinas")
    }
    else{
        console.log("Error selccion de producto");        
    }
    do{
        console.log("¿Quiere agregar más productos?");
        ingreso = prompt("1. Seguir comprando\n2. Salir\nR: ");
        if(ingreso == 2){
            console.log("Saliendo.");        
            fin = true;
            error = false;            
            break           
        }
        else if(ingreso==1){
            error = false;
            continue
        }
        else{
            console.log("Error de seleccion.");
            error = true;
        }        
    }while (error == true)
}

compra1.mostrar();
