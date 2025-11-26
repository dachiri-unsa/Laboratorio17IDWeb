const cargarMensaje = (callback) => {
    setTimeout(() => {
        callback("Mensaje cargado");
    },1000);
}

console.log("Inicio");
cargarMensaje((mensaje) => {
    console.log(mensaje);
})
console.log("Fin");
