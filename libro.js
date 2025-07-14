//Libros
function infoLibros(titulo, nomAutor, añoPublicacion, estado){
    this.titulo = titulo;
    this.nomAutor = nomAutor;
    this.añoPublicacion = añoPublicacion;
    this.estado = estado;
    this.fullname = function(){return "titulos: "+this.titulo+"\nAutor: "+this.nomAutor+"\nAño de publicacion: "+this.añoPublicacion}
    this.prestar = function(){
        // if(estado==false){
        console.log("Libro prestado.");
        return estado=true
    //}
        // else{console.log("El libro ya ha sido prestado")}
        }    
    this.devolver = function(){
        if(estado==true){
            console.log("Libro devuelto.");
            return estado=false
        }
        else{console.log("El libro ya ha sido devuelto")}}    
}
let libro1 = new infoLibros("La chica del tren", "Paula Hawkins", 2017, false);
console.log(libro1);
console.log(libro1.fullname());
libro1.prestar();
//Sin condicional para evaluar el estado del libro vuelve a asignar el estado prestado e imprimir el mensaje
libro1.prestar();


