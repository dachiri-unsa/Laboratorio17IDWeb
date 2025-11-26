try {
    console.log(variableInexistente);
}
catch (e) {
    console.log(e.name);
    console.log("Fallo");
}
finally {
    console.log("Siempre se ejecuta");
}
