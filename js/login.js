const usuario1 = {
    usuarioEmail : "jaul@email.com",
    usuarioSenha : "12345",
    usuarioGenero : "m",
    gravarDados : true
}

const usuario2 = {
    usuarioEmail : "bkzin@email.com",
    usuarioSenha : "12345",
    usuarioGenero : "m",
    gravarDados : true
}

//Criar uma lista de objetos
let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);
console.log(listaDeUsuarios);

addEventListener("click", (evento)=>{
    if(evento.target.id == "btnSubmit"){
        //console.log(evento.target);
        
        const inputEmail = document.querySelector("#idEmail");
        const inputPass = document.querySelector("#idPass");
        
        try{
            listaDeUsuarios.forEach((usuario)=>{
                
                if(inputEmail.value == usuario.usuarioEmail && inputPass.value == usuario.usuarioSenha){
                    throw("Acesso permitido!")
                }
            });
            throw("Acesso negado!");

        } catch (msg){
            const msgStatus = document.querySelector("#msgStatus")

            if(msg == "Acesso permitido!"){
                msgStatus.setAttribute("style", "color:green;")
                msgStatus.innerHTML = "<span><strong>Login efetuado com sucesso!</strong></span>";
            } else {
                msgStatus.setAttribute("style", "color:red;")
                msgStatus.innerHTML = "<span><strong>Senha ou nome de usuário inválidos!</strong></span>";
            }
        }
    }
});
