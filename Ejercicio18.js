const usuario = {
    nombre: "Daniel",
    id: 1
}
const cargarUsuario = (user) => {
    return new Promise((resolver) => {
        setTimeout(() => {
            resolver(user);
        },800+Math.random()*700);
    });
}
const mostrarUsuario = async (user) => {
    console.log("Cargando usuario...");
    const respuesta = await cargarUsuario(user);
    console.log(`Usuario cargado: ${respuesta.nombre} (ID:${respuesta.id})`);
}
mostrarUsuario(usuario);
