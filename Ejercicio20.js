const procesarElementosLista = (lista) => {
    return new Promise((resolver) => {
        let contador = 0;
        lista.forEach(element => {
            console.log("Procesando "+element);
            setTimeout(() => {
                contador++;
                if (contador === lista.length) {
                    resolver("Proceso completado");
                }
            },500 + Math.random()*1000);
        });
    });
}
const procesarLista = async(lista) => {
    const respuesta = await procesarElementosLista(lista);
    console.log(respuesta);
}
const miLista = [21,2,32,-23];
procesarLista(miLista);
