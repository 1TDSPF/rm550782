// /*var nome = "Kayque";

// if(nome == "Kayque"){
//     let nome = "Denise";
// }

// console.log(nome);*/

// //recuperando um elemento button que está no index.html
// /*const buttonElement = document.getElementById("meu-btn");

// //atrelando um evento de clique ao button que foi recuperado
// buttonElement.addEventListener("click", function(){
   
//     //função matemática -Math
//     //random = gera numeros aleatórios entre 0 e 1
//     //ceil = arredonda o numero para cima
//     //floor = aredonda o número para baixo
//     //round = arredonda o número aleatoriamente
//     let r,g,b;

//     r = Math.round(Math.random() * 255);
//     g = Math.round(Math.random() * 255);
//     b = Math.round(Math.random() * 255);

//     //this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");

//     this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);
// });


// //DESAFIO
// //Recupere o elemento tit-sec e atrle a ele um evento de mouse a sua escolha
// //Altera a cor de fundo e a cor do texto quando o evento ocorrer.

// const h2 = document.querySelector("h2");

// h2.addEventListener("click", function(){
    
//     console.log(this.innerHTML);

//     this.setAttribute("style", "color:white; background-color:purple;");

// })*/

// //Declarando arrys

// let frutas = ["maça", "laranja", "banana", "uva", "kiwi", "caqui"];

// console.log("Tamanho do array: ", frutas.length);

// console.log("Pegando um dos itens do array:", frutas[0]);
// console.log("Pegando um dos itens do array:", frutas[1]);
// console.log("Pegando um dos itens do array:", frutas[2]);
// console.log("Pegando um dos itens do array:", frutas[3]);
// console.log("Pegando um dos itens do array:", frutas[4]);
// console.log("Pegando um dos itens do array:", frutas[5]);

// //Itereando o array com estruturas de repetição
// //forEach
// frutas.forEach( (fruta)=>{
//     console.log("Pegando um dos itens do aray com forEach:", fruta);
// });

// //Adicionando um item ao final do array com o método push(item)
// frutas.push("melão");
// console.table(frutas);

// //Adicionando um item no ínicio do array com o método unshift(item)
// frutas.unshift("melancia");
// console.table(frutas);

// //Removendo um item do final do array com o método pop()
// frutas.pop();
// console.table(frutas);

// //Removendo um item do ínicio do array com o método shift()
// frutas.shift();
// console.table(frutas);

// //Localizando um determinado item dentro do array com o método indexOf(item)
// let inidce = frutas.indexOf("banana");
// console.log("Índice do item que foi localizado", inidce);
// console.log("Item que foi localizado atráves do index", frutas[indice]);

// //Utilizando os métodos, slice(indiceItem, quantidadeRemoções) para remover um item do array passando sua localizaçao através do indice.
// //Localizando um determinando item dentro do array com o método indexOf(item);
// let indice = frutas.indexOf("banana");
// console.log("ITEM QUE ESTAVA NO LOCAL ANTES DA REMOÇÃO : " + frutas[indice]);
// frutas.splice(indice,2);
// console.table(frutas);
// console.log("ITEM QUE FICOU NO LOCAL APÓS A REMOÇÃO : " + frutas[indice]);

// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// console.log(nr1);
// console.log(nr2);
// //CONCATENANDO ARRAYS
// let nr3 = [nr1,nr2];
// console.log("NOVO ARRAY : "+ nr3);
// //Imprimindo o Array concatenado com forEach
// nr3.forEach((nr)=>{
//     nr.forEach((n)=>{
//         console.log("ITEM DO NOVO ARRAY : " + n);
//     })
// })

let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];
console.log(nr1);
console.log(nr2);
//CONCATENANDO ARRAYS COM O OPERADOR SPREAD( ... )
let nr3 = [...nr1,...nr2];
// //Imprimindo o Array concatenado com forEach
nr3.forEach((nr)=>{
    console.log("ITEM DO NOVO ARRAY : " + nr);    
});