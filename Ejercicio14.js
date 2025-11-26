const Usuario = {
    nombre: "Daniel",
    id: 1
}
const cargarUsuario = (usuario) => {
    return new Promise ((resolver) => {
        const duracion = 800 + Math.random() * 700;
        console.log("Cargando usuario...");
        setTimeout(() => {
            resolver(`${usuario.nombre} (ID:${usuario.id})`);
        },duracion);
    });
}
cargarUsuario(Usuario).then((mensaje) => console.log("Usuario cargado: "+mensaje));
