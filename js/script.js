/*var nome = "Kayque";

if(nome == "Kayque"){
    let nome = "Denise";
}

console.log(nome);*/

//recuperando um elemento button que está no index.html
const buttonElement = document.getElementById("meu-btn");

//atrelando um evento de clique ao button que foi recuperado
buttonElement.addEventListener("click", function(){
   
    //função matemática -Math
    //random = gera numeros aleatórios entre 0 e 1
    //ceil = arredonda o numero para cima
    //floor = aredonda o número para baixo
    //round = arredonda o número aleatoriamente
    let r,g,b;

    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

    //this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");

    this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);
});


//DESAFIO
//Recupere o elemento tit-sec e atrle a ele um evento de mouse a sua escolha
//Altera a cor de fundo e a cor do texto quando o evento ocorrer.

const h2 = document.querySelector("h2");

h2.addEventListener("click", function(){
    
    console.log(this.innerHTML);

    this.setAttribute("style", "color:white; background-color:purple;");

})

