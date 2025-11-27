const procesarLista = (lista) => {
    return new Promise((resolver,rechazar) =>{
        let contador = 0;
        lista.forEach(element => {
            console.log("Procesando "+element);
            setTimeout(() => {
                contador++;
                if (contador === lista.length) {
                    resolver("Proceso completado.")
                }
            }, 500 + Math.random()*1000);
        });
    });
}
const miLista = [32,235,2,-12,12]
procesarLista(miLista)
    .then(mensage => console.log(mensage))
