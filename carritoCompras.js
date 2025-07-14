function carrito (){
    this.productos = [nombre = [],precio = []];
    this.total = 0;
    this.agregarProducto = function(nombre, precio){
        console.log("Producto ", nombre, " agregado");        
        this.productos[0][0].push(nombre)
    }
    this.calcularDescuento=function(){

    }
}

let carrito = new carrito();
let fin = false;
let error = false;
while(fin!=true){
    console.log("Agrege los productos deseados de la siguiente lista: ");
    console.log("1. Manzanas\n2. Peras \n3. Mandarinas");
    let nombre = prompt("R: ");
    if (nombre == 1){
        compra1.agregarProducto("Manzanas")        
    }
    else if (nombre==2){
        compra1.agregar("Peras")
    }
    else if (nombre==3){
        compra1.agregar("Mandarinas")
    }
    else{
        console.log("Error selccion de producto");        
    }
    do{
        console.log("¿Quiere agregar más productos?");
        nombre = prompt("1. Seguir comprando\n2. Salir\nR: ");
        if(ingreso == 2){
            console.log("Saliendo.");        
            fin = true;
            error = false;            
            break           
        }
        else if(nombre==1){
            error = false;
            continue
        }
        else{
            console.log("Error de seleccion.");
            error = true;
        }        
    }while (error == true)
}