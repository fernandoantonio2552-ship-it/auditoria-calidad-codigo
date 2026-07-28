function sumar(a, b) {
    let resultado = a + b;
    return resultado;
}

function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }
    return a / b;
}

function contraseñaAdmin() {
    const password = "123456";
    console.log(password);
}

module.exports = {
    sumar,
    dividir
};