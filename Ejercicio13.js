const cargarMensaje = () => {
    return new Promise ((resolver) => {
        setTimeout(() => {
            resolver("Mensaje cargado");
        },1000);
    });
}
cargarMensaje().then(mensage => console.log(mensage));
