function executarScript(){

    var quantidade = Number(prompt("Digite o número de vezes que a imagem deve aparecer:"));

    const imageLink = "https://www.html.am/images/samples/remarkables_queenstown_new_zealand-300x225.jpg";
    var myDiv = document.getElementById("images");

    if(quantidade <= 0){
        window.alert("O valor digitado é inválido!");
    }

    for(i = 0; i < quantidade; i++){

        var image = new Image();
        image.src = imageLink;
        image.id = i;

        myDiv.append(image);
    }
}