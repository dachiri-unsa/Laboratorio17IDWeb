const funcionInterna = () => {
    try {
        console.log(x);
    }
    catch (e) {
        console.log("Nivel 2 atrapó el error: "+e.message);
        throw e;
    }

}
const funcionExterna = () => {
    try {
        funcionInterna()
    }
    catch (e) {
        console.log("Nivel 1 recibió el error: "+e.message);
        throw e;
        
    }
}
try {
    funcionExterna();
}
catch (e) {
    console.log("ERROR FINAL capturado en el nivel superior: "+e.message);
}

