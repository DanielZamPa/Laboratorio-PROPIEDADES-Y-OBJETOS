const prompt = require("prompt-sync")();
function carrito (){
    this.productos = [[],[]]
    this.total = 0;
    this.agregarProducto = function(nombre, precio){
        console.log("Producto ", nombre, " agregado");        
        this.productos[0].push(nombre);
        this.productos[1].push(precio);        
        this.total += precio;           
        console.log(this.total);        
    }
    this.calcularDescuento=function(){
        
    }
}

let carrito1 = new carrito();
let fin = false;
let error = false;
while(fin!=true){
    console.log("Agrege los productos deseados de la siguiente lista: ");
    console.log("1. Chaqueta Chevignon\n2. Jeans \n3. Camisa Polo");
    let nombre = prompt("R: ");
    if (nombre == 1){
        carrito1.agregarProducto("Chaqueta Chevignon", 120000)             
    }
    else if (nombre==2){
        carrito1.agregarProducto("Jeans", 75000)
    }
    else if (nombre==3){
        carrito1.agregarProducto("Camisa Polo", 45000)
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