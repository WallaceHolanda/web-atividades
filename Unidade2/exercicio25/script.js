function Autor(nome, nacionalidade) {
    this.nome = String(nome);
    this.nacionalidade = String(nacionalidade);
}

function Genero(tipo, codigo) {
    this.tipo = String(tipo);
    this.codigo = String(codigo);
}

function Livro(titulo, paginas, autor, genero) {
    this.titulo = titulo;
    this.paginas = paginas;
    this.autor = autor;
    this.genero = genero;
    this.temMesmoAutor = function isMesmoAutor(livroAux){
        livroAux = criarLivroExemplo();
        return livroAux.autor.nome == this.autor.nome;
    }
}

function criarLivroExemplo(){
    const autorExemplo = new Autor("Antoine", "Francês");
    const generoExemplo = new Genero("Literatura Infantil", "LIV#02");
    const livroExemplo = new Livro("Pequeno Príncipe", "200", autorExemplo, generoExemplo);
    return livroExemplo;
}

function existemCamposVazios(livro){
    console.log(livro.genero.codigo.length);
    return (livro.titulo.length == 0 || 
            livro.paginas.length == 0 || 
            livro.autor.nome.length == 0 ||
            livro.autor.nacionalidade.length == 0 ||
            livro.genero.tipo.length == 0 ||
            livro.genero.codigo.length == 0); 
}

function exibirCampo(mensagem){
    let resposta;

    do
        resposta = prompt(mensagem);
    while(resposta.length <= 0);

    return resposta;
}

function exibirDadosLivro(livro, isMesmoAutor){
    window.alert("== Informações sobre o Livro ==" + 
        "\n= Título do Livro: "  + livro.titulo +
        "\n= Páginas: " + livro.paginas + 
        "\n= Autor: " + livro.autor.nome +
        "\n= Nacionalidade: " + livro.autor.nacionalidade +
        "\n= Gênero: " + livro.genero.tipo +
        "\n= Código: " + livro.genero.codigo +
        "\n= Mesmo Autor: " + isMesmoAutor
        );
}

// Criar um livro e exibir as informações
function criarLivro() {
    const nomeAutor = exibirCampo("Nome do Autor: ");
    const nacionalidadeAutor = exibirCampo("Nacionalidade do Autor: ");
    const autor = new Autor(nomeAutor, nacionalidadeAutor);

    const tipoGenero = exibirCampo("Gênero do Livro: ");
    const codigoGenero = exibirCampo("Código do Gênero");
    const genero = new Genero(tipoGenero, codigoGenero);
    
    const tituloLivro = exibirCampo("Título do Livro: ");
    const paginasLivro = exibirCampo("Quantidade de páginas do Livro: ");
    const livro = new Livro(tituloLivro, paginasLivro, autor, genero);

    mesmoAutor = livro.temMesmoAutor(criarLivroExemplo());
    exibirDadosLivro(livro, mesmoAutor);
}