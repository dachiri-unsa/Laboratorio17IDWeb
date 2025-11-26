const dividirAsync = (a,b,callback) => {
    setTimeout(() => {
        if (b === 0) callback(new Error("No se puede dividir entre cero"), null);
        else callback(null, a / b);
    },1500);
}
dividirAsync(10,0,(posibleError, resultado) => {
    if (posibleError) {
        console.log(posibleError.message);
        return;
    }
    console.log("El resultado es: "+resultado);
});
