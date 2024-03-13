const main = document.querySelector('main');
const subtitulo =  document.querySelector('.subtitulo') 
const link = document.querySelector('h2#link a')
const parrafos = document.querySelectorAll('p')


Swal.fire({
    title: "Ingresá tu nombre",
    input:"text",
    showCancelButton: true,
}).then(({value : nombre}) => {
    subtitulo.innerHTML += nombre ? nombre : "Invitado";
    subtitulo.style.textTransform = "Uppercase"
    link.style.color = "#E51B3E"

    Swal.fire({
        title: "¿Desea colocar un fondo de pantalla?",
        showDenyButton: true,
        confirmButtonText: "Sí, quiero",
        denyButtonText: `No, ni ahí`
      }).then((result) => {
        if (result.isConfirmed) document.body.classList.add("fondo")
      });
})
.catch(error => console.log(error));

parrafos.forEach((parrafo, index) => {
    (index + 1) % 2 === 0 ? parrafo.classList.add("destacadoPar") : parrafo.classList.add("destacadoImpar")
})

main.style.display = "block";