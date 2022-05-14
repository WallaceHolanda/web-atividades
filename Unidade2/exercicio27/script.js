let janela;

function criarJanelaPublica(){
    janela = window.open("", "", "width=400, height=200");
}

function criarJanela() {
  return window.open("index.html", "", "width=400, height=200");
}

function capturarValorX(){
    let campoX = document.getElementById("x");
    let valorX = campoX.value;
    return valorX;
}

function capturarValorY(){
    let campoY = document.getElementById("y");
    return campoY.value;
}

function capturarOpcao(){
    let campoOpcao = document.getElementById("opcao");
    return campoOpcao.value;
}

function moverJanela() {
    //const minhaJanela = criarJanela();
    const x = capturarValorX();
    const y = capturarValorY();
    const opcao = capturarOpcao();

    if(opcao == "novaposicao"){
        console.log("Entrei...");
        janela.moveTo(x, y);
    } else if(opcao == "deslocamento"){
        janela.moveBy(x, y);
    } else {
        window.alert("Erro de opção!");
    }
}