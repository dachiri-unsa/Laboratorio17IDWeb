const validarEdad = (edad) => {
    const valor = String(edad);
    if (!/^\d+$/.test(valor)) {
        throw new Error("Edad inválida");
    }
    if (parseInt(valor) < 0) {
        throw new Error("Edad inválida");
    }
}

let edad1 = -3;
let edad2 = "manzana21";
try {
    validarEdad(edad2);
}
catch (e) {
    console.log(e.message);
}
