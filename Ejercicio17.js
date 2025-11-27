const cargarMensaje = () => {
    return new Promise((resolver) => {
        setTimeout(() => {
            resolver("Mensaje cargado.");
        },1000);
    });
}
const mostrarMensaje = async () => {
    console.log("Cargando mensaje...");
    const resultado = await cargarMensaje();
    console.log(resultado);
}

mostrarMensaje();
