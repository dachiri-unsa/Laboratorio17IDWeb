const procesoAsync = (a,b) => {
    return new Promise((resolver, rechazar) => {
        setTimeout(() => {
            if (b === 0) {
                rechazar(new Error("No se puede dividir entre 0."));
            }
            else {
                resolver(a/b);
            }
        },1500);
    });
}
const dividirAsync = async (a,b) => {
    try {
        console.log("Procesando...");
        const respuesta = await procesoAsync(a,b);
        console.log("La respuesta es: "+respuesta);
    }
    catch (error) {
        console.log(error.message);
    }
}
dividirAsync(124,0);
