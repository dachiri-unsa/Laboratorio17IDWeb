const Usuario = {
    nombre: "Daniel",
    id: 1
}
const cargarUsuario = (callback) => {
    setTimeout(() => {
        callback(Usuario);
    }, 800 + Math.random()*700);
}
cargarUsuario((objetoIngresado) => {
    console.log(`Usuario cargado: ${objetoIngresado.nombre} (ID:${objetoIngresado.id})`);
});
