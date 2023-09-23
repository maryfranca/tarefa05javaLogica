let idade = parseFloat(prompt("Digite a sua idade:")); //fica fora da funcao

function verificacao() {
  if (idade >= 18) {
    window.alert("Pode dirigir e votar");
  } else {
    window.alert("Não pode votar e nem dirigir");
  }
}

verificacao();
