const button = document.querySelector("button");
const body = document.querySelector("body")
const formButton = document.getElementById("idButton");
const input = document.querySelector("input");
const ul = document.querySelector("ul")
const img = document.getElementById("buttomImg")
const buttonMsg = document.getElementById("buttomMsg");
const p = document.querySelector("p");
const buttonMsg2 = document.getElementById("buttomMsg2");
const label = document.querySelector("label");

// button.addEventListener("click", function(){
//     body.setAttribute("style", "background-color:purple;");
//     ul.setAttribute("style", "color:white;")
// });

function darkMode(){
    body.classList.toggle("dark");
    button.innerHTML = "Light mode";
}

formButton.addEventListener("click", function(){
    conteudo = (input.value);

    const li = document.createElement("li");
    li.innerHTML = conteudo;
    ul.appendChild(li);

    input.value = "";
});

img.addEventListener("click", function(){
    novaImg = "<img src='./imgs/dog_formado.jpg' alt='dog_formado' width='250px'>";
    console.log(img.innerHTML);
    img.innerHTML = novaImg;
    console.log(img.innerHTML);
});

buttonMsg.addEventListener("click", function(){
    p.innerHTML = "Olá, sua mensagem foi exibida!";   
});

buttonMsg2.addEventListener("click", function(){
    console.log("Botão clicado");
    label.innerHTML = "";
});



