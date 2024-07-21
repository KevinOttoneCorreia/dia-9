nome = String(prompt("Qual o seu nome? "))
peso = Number(prompt("Qual seu peso? "))
altura = Number(prompt("Qual sua altura? "))
profissao = String(prompt("Qual sua profissão? "))
idade = Number(prompt("Qual sua idade? "))

    console.log("Olá " + nome + ", você tem " + idade + "anos, é " + profissao + ",tem " + altura + "M de altura e pesa" + peso + "Kg")

idadeAno = (2023 - idade)
    console.log("Olá você nasceu no ano " + idadeAno)

if (idade >= 18){
        console.log ("Está liberado para tomar umas geladas");
}else {
    console.log("Sem gelada para você")
}

let faixaIMC = peso / (altura * altura)

if (faixaIMC < 18,5){
    console.log("Magreza")
}else if (faixaIMC >= 18,5 && faixaIMC <= 24,9){
    console.log("Normal")
}else if (faixaIMC >= 24,9 && faixaIMC <= 30){
   console.log("Sobrepeso")
}else {
    console.log("Obesidade")  
}

let anoNasc = anoAtual - idade
let anoAtual = 2023
let anoVivido = anoNasc
let idadeAtual = 0

for(let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++) {
    console.log(anoVivido + "-" + idadeAtual + "anos de idade")
    idadeAtual++
}