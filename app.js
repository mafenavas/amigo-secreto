let listaNombreSorteados = [];

function agregarAmigos() {
    let nombreAgregado = document.querySelector('#amigo').value

    if (nombreAgregado == '') {

        alert("Porfavor inserte un nombre válido")
    } else {

        listaNombreSorteados.push(nombreAgregado)
        document.querySelector('#amigo').value = '';
    }
}
