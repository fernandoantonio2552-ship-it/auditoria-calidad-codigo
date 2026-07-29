function login() {

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if (true) {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("mensaje").innerHTML =
            "Usuario o contraseña incorrectos";
    }

}