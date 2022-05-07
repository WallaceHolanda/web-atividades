realizarSoma = (x, y) => x + y;
realizarSubtracao = (x, y) => x - y;
realizarMultiplicacao = (x, y) => x * y;
realizarDivisao = (x, y) => x / y;

function executarScript(){
  var operacao = prompt("Digite a operação:");
  var primeiroOperador = Number(prompt("Digite o primeiro operador:"));
  var segundoOperador = Number(prompt("Digite o segundo operador:"));
  
  exibirResultado(primeiroOperador, operacao, segundoOperador);
}

function exibirResultado(x, op, y){
    var resultado = calcularResultado(x, op, y);

    if(resultado != null){
        document.getElementById("resultado").innerHTML = x + " " + transformarEmNegrito(op) + " " + y + " = " + aumentarFonte(resultado);

    } else {
        document.getElementById("resultado").innerHTML = "Dados inválidos!";
    }
}

function transformarEmNegrito(valor){
    return "<b>" + valor + "</b>";
}

function aumentarFonte(valor){
    return "<span style=\"font-size: 25px;\">" + transformarEmNegrito(valor) + "</span>";
}

function calcularResultado(x, op, y){
    switch(op){
        case '+':
            return realizarSoma(x, y);
            break;
        
        case '-':
            return realizarSubtracao(x, y);
            break;
        
        case '*':
            return realizarMultiplicacao(x, y);
            break;

        case '/':
            return realizarDivisao(x, y);
            break;

        default:
            return null;
            break;
    }
}