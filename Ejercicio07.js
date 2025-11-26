try {
    let numero = 1245;
    numero.includes("hola");
}
catch (e) {
    if (e instanceof TypeError) {
        console.log("Hubo un error tipo: TypeError");
        console.log(e.message);
    }
    else {
        console.log("Hubo un error.");
        console.log(e.message);
    }
}
