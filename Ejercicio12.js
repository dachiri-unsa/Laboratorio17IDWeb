const procesarLista = (arreglo, callback) => {
    let procesados = 0;
    for (const e of arreglo) {
        const tiempo = 500 + Math.random() * 1000;
        console.log(`Procesando ${e}...`);
        setTimeout(() => {
            procesados++;
            if (procesados === arreglo.length) {
                callback("Proceso completado");
            }
        }, tiempo);
    }
};

const lista = [32, 5, -23];
procesarLista(lista, (mensaje) => {
    console.log(mensaje);
});
