const dividirAsync = (a,b) => {
    return new Promise((resolver, rechazar) => {
        setTimeout(() => {
            if (b === 0) {
                rechazar(new Error("No se puede dividir entre 0"));
            }
            else {
                resolver(a/b);
            }
        },1500);
    })
}
dividirAsync(10,0)
    .then(respuesta => console.log("La respuesta es: "+respuesta))
    .catch(error => console.log(error.message))
