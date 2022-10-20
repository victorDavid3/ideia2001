// Autor: Victor David Barbosa

var idioma = null;
var textPesquisaProduto = null;
var textLancamentos = null;
var textCarrinho = null;
var textContato = null;
var srcBandeira = null;

var btnPesquisaProduto = document.getElementById("btnPesquisaProduto");
var btnLancamentos = document.getElementById("btnLancamentos");
var btnCarrinho = document.getElementById("btnCarrinho");
var btnContato = document.getElementById("btnContato");

var imgBandeira = document.getElementById("imgBandeira");

// Pega o idioma selecionado e muda as palavras para o idioma escolhido 
function mudarIdioma(){
    idioma = document.getElementById("selectIdioma").value;

    if (idioma == "En"){
        textPesquisaProduto = "Search Products";
        textLancamentos = "Releases";
        textCarrinho = "Cart";
        textContato = "Contact";
        srcBandeira = "Imagens/Bandeiras/Estados Unidos.png"
    } else if (idioma == "Esp"){
        textPesquisaProduto = "Buscar Productos";
        textLancamentos = "Lanzamientos";
        textCarrinho = "Carro";
        textContato = "Contacto";
        srcBandeira = "Imagens/Bandeiras/Espanha.png"
    } else if (idioma == "Pt-Br"){
        textPesquisaProduto = "Pesquisar Produtos";
        textLancamentos = "Lançamentos";
        textCarrinho = "Carrinho";
        textContato = "Contato";
        srcBandeira = "Imagens/Bandeiras/Brasil.png"
    }

    btnPesquisaProduto.textContent = textPesquisaProduto;
    btnLancamentos.textContent = textLancamentos;
    btnCarrinho.textContent = textCarrinho;
    btnContato.textContent = textContato
    imgBandeira.src = srcBandeira;
    
    
}


var modal = document.getElementById("myModal");

//Exibe o conteúdo do menu 
function mostrarMenu(){
    modal.style.display = "block";
}

// Obtenha o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar em <span> (x), fecha o modal
span.onclick = function() { 
  modal.style.display = "none";
}
