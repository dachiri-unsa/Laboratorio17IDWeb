try {
    let textoJSON = '{nombre: "Pepito"}';
    let objeto = JSON.parse(textoJSON);
    console.log("Objeto: "+objeto.nombre);
}
catch (e) {
    console.log(e.name);
    console.log(e.message);
}
