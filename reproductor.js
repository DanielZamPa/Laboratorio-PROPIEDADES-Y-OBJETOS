/* Estado posibles del reproductor: 1 = detenido; 2 = pausado; 3 = reproduciendo */
function reproductor(estado){
    this.estado = Number(estado);
    this.play = function(){
        if (estado == 1 || estado == 2){
            estado = 3;
            console.log("Reproducioendo.");            
        }
    }
    this.pause = function(){
        if (estado == 3){
            estado = 2;
            console.log("Pausado.");            
        }
    }
}

let reproductor1 = new reproductor(1);
reproductor1.play();
reproductor1.pause();