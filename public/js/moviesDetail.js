const body = document.querySelector('body');
const h1 = document.querySelector('h1');

Swal.fire({
    title: "¿Desea modo oscuro?",
    showDenyButton: true,
    confirmButtonText: "Sí, quiero",
    denyButtonText: `No, Así está bien`
  }).then((result) => {
    if (result.isConfirmed) {

        body.style.backgroundColor = "#7f7f7f"
    }

    h1.innerHTML = 'Detalles de ' + h1.innerText
    h1.style.color = "white"
    h1.style.backgroundColor = "teal"
    h1.style.padding = "20px"

  });