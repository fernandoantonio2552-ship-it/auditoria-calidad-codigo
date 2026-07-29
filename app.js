function login() {
    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;

    if (usuario === "admin" && contraseña === "12345") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("mensaje").innerHTML =
            "Usuario o contraseña incorrecta";
    }
}