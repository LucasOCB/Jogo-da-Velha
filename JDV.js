const simbolos = document.getElementsByClassName("jdv-simbolo")
const validarSimbolos = document.getElementsByClassName("jdv-simbolo")
const mensagemVitoria = document.querySelector(".mensagem-vitoria")
const botaoReset = document.querySelector("#reiniciar")
const mensagemVitoriaQuem = document.querySelector("#quemGanho")
var visao = 0
var simbolo  = 0
var contagemEmpate = 0
var alguemVenceu = false
function limparVisao(painelSobre) {
    painelSobre.classList.remove(`visao${visao % 2}`)
}
function validarEmpate(){
    ++contagemEmpate 
    if(contagemEmpate === 9){
        mensagemVitoria.classList.add("mensagem-vitoria-simbolo")
        mensagemVitoriaQuem.innerText = "empate!"
    }
}
function validarVitoria() {
    let ocorreuEmpate
    ciclo("1");
    ciclo("0");
    function ciclo(simbolo){
        //Horizontal
        if(
            simbolos[0].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[1].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[2].classList.contains(`simbolo-${simbolo}`) == true
        ){
            mensagemVitoria.classList.add("mensagem-vitoria-simbolo")
            if(simbolo == "1"){
                mensagemVitoriaQuem.innerText = `O ${mensagemVitoriaQuem.innerText}` 
            }else{
                mensagemVitoriaQuem.innerText = `X ${mensagemVitoriaQuem.innerText}` 
            }
            ocorreuEmpate = false
        }
        if(
            simbolos[3].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[4].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[5].classList.contains(`simbolo-${simbolo}`) == true
        ){
            mensagemVitoria.classList.add("mensagem-vitoria-simbolo")
            if(simbolo == "1"){
                mensagemVitoriaQuem.innerText = `O ${mensagemVitoriaQuem.innerText}` 
            }else{
                mensagemVitoriaQuem.innerText = `X ${mensagemVitoriaQuem.innerText}` 
            }
            ocorreuEmpate = false
        }
        if(
            simbolos[6].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[7].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[8].classList.contains(`simbolo-${simbolo}`) == true
        ){
            mensagemVitoria.classList.add("mensagem-vitoria-simbolo")
            if(simbolo == "1"){
                mensagemVitoriaQuem.innerText = `O ${mensagemVitoriaQuem.innerText}` 
            }else{
                mensagemVitoriaQuem.innerText = `X ${mensagemVitoriaQuem.innerText}` 
            }
            ocorreuEmpate = false
        }
        //Vertical
        if(
            simbolos[0].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[3].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[6].classList.contains(`simbolo-${simbolo}`) == true
        ){
            mensagemVitoria.classList.add("mensagem-vitoria-simbolo")
            if(simbolo == "1"){
                mensagemVitoriaQuem.innerText = `O ${mensagemVitoriaQuem.innerText}` 
            }else{
                mensagemVitoriaQuem.innerText = `X ${mensagemVitoriaQuem.innerText}` 
            }
            ocorreuEmpate = false
        }
        if(
            simbolos[1].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[4].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[7].classList.contains(`simbolo-${simbolo}`) == true
        ){
            mensagemVitoria.classList.add("mensagem-vitoria-simbolo")
            if(simbolo == "1"){
                mensagemVitoriaQuem.innerText = `O ${mensagemVitoriaQuem.innerText}` 
            }else{
                mensagemVitoriaQuem.innerText = `X ${mensagemVitoriaQuem.innerText}` 
            }
            ocorreuEmpate = false
        }
        if(
            simbolos[2].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[5].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[8].classList.contains(`simbolo-${simbolo}`) == true
        ){
            mensagemVitoria.classList.add("mensagem-vitoria-simbolo")
            if(simbolo == "1"){
                mensagemVitoriaQuem.innerText = `O ${mensagemVitoriaQuem.innerText}` 
            }else{
                mensagemVitoriaQuem.innerText = `X ${mensagemVitoriaQuem.innerText}` 
            }
            ocorreuEmpate = false
        }
        //Diagonal
        if(
            simbolos[0].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[4].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[8].classList.contains(`simbolo-${simbolo}`) == true
        ){
            mensagemVitoria.classList.add("mensagem-vitoria-simbolo")
            if(simbolo == "1"){
                mensagemVitoriaQuem.innerText = `O ${mensagemVitoriaQuem.innerText}` 
            }else{
                mensagemVitoriaQuem.innerText = `X ${mensagemVitoriaQuem.innerText}` 
            }
            ocorreuEmpate = false
        }
        if(
            simbolos[2].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[4].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[6].classList.contains(`simbolo-${simbolo}`) == true
        ){
            mensagemVitoria.classList.add("mensagem-vitoria-simbolo")
            if(simbolo == "1"){
                mensagemVitoriaQuem.innerText = `O ${mensagemVitoriaQuem.innerText}` 
            }else{
                mensagemVitoriaQuem.innerText = `X ${mensagemVitoriaQuem.innerText}` 
            }
            ocorreuEmpate = false
        }    
    }
    if (ocorreuEmpate == false){
        return true;
    } else{
        return false;
    }
}
function reset(){
    visao = 0
    simbolo = 0
    contagemEmpate = 0
    alguemVenceu = false
    mensagemVitoriaQuem.innerText = "Venceu!"
    mensagemVitoria.classList.remove("mensagem-vitoria-simbolo")
    for(const limparSimbolos of simbolos ){
        limparSimbolos.classList.remove(`simbolo-0`)
        limparSimbolos.classList.remove("simbolo-1")
        limparSimbolos.classList.remove("visao0")
        limparSimbolos.classList.remove("visao1")
    }
}
function validacaoClasse(a){
    if(a.classList.contains("simbolo-0") || a.classList.contains("simbolo-1")){
        return true
    }else{
        return false
    }
}
for(const simboloHover of simbolos){
    simboloHover.addEventListener('mouseover', () => {
        let validar = validacaoClasse(simboloHover)
        if(validar == true){
            return
        }else {
            simboloHover.classList.add(`visao${visao % 2}`)
        }
    })
    simboloHover.addEventListener('mouseout', () => {
        simboloHover.classList.remove(`visao${visao % 2}`)
    })
}
for(const simboloClick of simbolos){
    simboloClick.addEventListener('click', () => {
        let validar = validacaoClasse(simboloClick)
        if(validar == true){
            return
        }else {
            simboloClick.classList.add(`simbolo-${simbolo % 2}`)
        }
        if (alguemVenceu == true){
            contagemEmpate = 0
        }else {
            validarEmpate();  
        }
        simbolo += 1
        visao += 1
        limparVisao(simboloClick)
        alguemVenceu = validarVitoria();
    })
}
botaoReset.addEventListener('click', () => {
    reset();
})