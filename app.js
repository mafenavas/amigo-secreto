let listaNombreSorteados = [];

function agregarAmigo() {
    let inputAmigo = document.querySelector('#amigo')
    let nombreAgregado = inputAmigo.value

    if (nombreAgregado == '') {
        alert("Porfavor inserte un nombre válido")
    } else {
        listaNombreSorteados.push(nombreAgregado)
        inputAmigo.value = '';
    }
    actualizarLista();
}

function actualizarLista() {
    let listaAmigos = document.querySelector('#listaAmigos')
    listaAmigos.innerHTML = ''

    let lista = ''
    for (let i = 0; i < listaNombreSorteados.length; i++) {
        let nombreAmigo = listaNombreSorteados[i];
        lista = `${lista} <li>${nombreAmigo}</li>`
        listaAmigos.innerHTML = lista
        
    }
}
