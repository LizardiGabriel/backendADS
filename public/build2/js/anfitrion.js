/* Función para los modales */
const modal = Swal.mixin({
  timer: 3000,
  timerProgressBar: true,
  background: "#fbfff1",
  showConfirmButton: true,
  confirmButtonColor: "#89b6b1",
  cancelButtonColor: "#305272",
  denyButtonColor: "#305272",
  width: "50%",
  customClass: {
    title: "titleSize",
    htmlContainer: "contentSize",
    confirmButton: "buttonSize",
    cancelButton: "buttonSize",
    denyButton: "buttonSize",
    icon: "iconSize",
  }
})

function logout() {
    fetch("/anfitrion/logout", {
        method: "GET"
    })
        .then(response => {
            if (response.ok) {
                window.location.href = "/home/login.html";
            } else {
                console.error("Error al cerrar sesión:", response.statusText);
            }
        })
        .catch(error => console.error("Error al cerrar sesión:", error));

}

function refReuniones() {
    window.location.href = "/anfitrion/reuniones.html";
}
function refSalas() {
    window.location.href = "/anfitrion/salas.html";
}
function refCuenta() {
    window.location.href = "/anfitrion/cuenta.html";
}
function reuniones2() {
    window.location.href = '/anfitrion/crearReunion';
}

