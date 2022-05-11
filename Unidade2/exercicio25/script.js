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

function temMesmoAutor(livro){
    const autorExemplo = new Autor("Antoine", "Francês");
    const generoExemplo = new Genero("Literatura Infantil", "LIV#02");
    const livroExemplo = new Livro("Pequeno Príncipe", "200", autorExemplo, generoExemplo);

    return livroExemplo.autor.nome == livro.autor.nome;
}

// Criar um livro e exibir as informações
function criarLivro() {
    const nomeAutor = prompt("Nome do Autor: ");
    const nacionalidadeAutor = prompt("Nacionalidade do Autor: ");
    const autor = new Autor(nomeAutor, nacionalidadeAutor);

    const tipoGenero = prompt("Tipo do Gênero: ");
    const codigoGenero = prompt("Código do Gênero");
    const genero = new Genero(tipoGenero, codigoGenero);

    const tituloLivro = prompt("Título do Livro: ");
    const paginasLivro = prompt("Quantidade de páginas do Livro: ");
    const livro = new Livro(tituloLivro, paginasLivro, autor, genero);

    isAtributosVazios = existemCamposVazios(livro);
    isMesmoAutor = temMesmoAutor(livro);

    window.alert("== Informações sobre o Livro ==" + 
        "\n= Título do Livro: "  + livro.titulo +
        "\n= Páginas: " + livro.paginas + 
        "\n= Autor: " + livro.autor.nome +
        "\n= Nacionalidade: " + livro.autor.nacionalidade +
        "\n= Gênero: " + livro.genero.tipo +
        "\n= Código: " + livro.genero.codigo +
        "\n= Há atributos vazios: " + isAtributosVazios +
        "\n= Mesmo Autor: " + isMesmoAutor
        );
}