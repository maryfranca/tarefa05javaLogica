//1 -Faça os exercícios abaixo: 
//A. Crie o arquivo termometro.js  
//B. Crie o arquivo index.html com o esqueleto usual e inclua termometro.js nele utilizando a tag script 
//C. No arquivo termometro.js: ○ Declare uma variável chamada temperatura ○ Utilizando if e else,  exiba no
// console: “Você está com febre” quando a temperatura for maior que 38 graus e “Nada de  febre” 
// caso contrário  
//D. Teste seu código com os seguintes valores de temperatura: 36.5, 38, 99. Avalie os resultados  obtidos 


var temperatura = parseFloat(prompt("Digite a temperatura:"));

if (temperatura >= 38 && temperatura <= 58) {
    window.alert("Você digitou:" + temperatura + "\nVocê está com febre");
} if (temperatura < 38) {
    window.alert("Você digitou:" + temperatura + "Nada de febre");
}
else{
    window.alert("Você digitou:" + temperatura + "Você está morto");
}



