

function countText() {
  let text = document.form_main.text.value;
  let qCarac = text.length;
  document.getElementById('characters').innerText = qCarac;
}

function posAcao() {
  document.getElementById("digite").innerText = "Frase limpinha :)";
  document.getElementById("digite").style.color = "#2BDBA1";
  document.getElementById("text").style.borderColor = "#2BDBA1"
  document.getElementById("botao").style.background = "#2BDBA1";
  document.getElementById("botao").innerText = "Limpar outra frase";
}

function limpar(){
  let palavras = ["merda", "porra", "corno", "corna", "puto", "puta", "caralho", "desgraça", "imbecil", "idiota", "viado"];
  let palavra = new RegExp(palavras.join("|") , "gi");
  texto = document.getElementById("text").value;
  resultado = texto.replace(palavra, "***");
  document.getElementById("text").value = resultado;
  console.log(resultado);
}

function acao(){
  
  if  (document.getElementById("botao").innerText == "Limpar outra frase"){
    document.location.reload(true);
  }
  else{
    limpar();
  }
  
  


  posAcao();
}
