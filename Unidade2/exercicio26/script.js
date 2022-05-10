function capturarTexto(){
    let campoTexto = document.getElementById("texto");
    return campoTexto.value;
}

function capturarIndice(){
    let indice = document.getElementById("indice");
    return indice.value;
}

function atualizarLetra(letra){
    let campoLetra = document.getElementById("letra");
    campoLetra.value = letra;
}

function adicionarLetra() {
    const texto = capturarTexto();
    const posicao = Number(capturarIndice());

    console.log("Tamanho: " + texto.length);
    
    if(posicao >= 0 && posicao < texto.length){
        atualizarLetra(texto[posicao]);
    } else {
        window.alert("Campo(s) inválido(s)!");
    }
}