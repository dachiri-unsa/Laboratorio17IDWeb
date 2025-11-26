try {
    holamundo("print");
}
catch (error) {
    if (error instanceof ReferenceError) {
        console.log("ReferenceError: Variable no definida se esta usando.");
        console.log(error.message);
    }
}
finally {
    console.log("Fin del programa");
}
