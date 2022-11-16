// Prática guiada

/*
if e if

Vocês foram contratados para criar um programa para o Labank. Vamos verificar se o dependente do usuário
tem entre 13 e 17 anos para aprovar a solicitação de cartão de crédito vinculado.

Faremos de duas formas:

1. Utilizando ifs aninhados.
2. Utilizando um operador lógico para unir duas operações relacionais.

Caso o número esteja entre 13 e 17, imprima:
"Seu dependente já pode ter um cartão de crédito vinculado ao seu".

Caso o número não esteja entre 13 e 17, imprima:
"Consulte outras possibilidades do Labank". */

// 1)

// const idadeDependente = Number(prompt("Solicitação de dependente: \n Qual a idade do dependente?"))

/* if(idadeDependente >= 13){
    if(idadeDependente <= 17){
        console.log("Seu dependente já pode ter um cartão vinculado ao seu.")
    }else{
    console.log("O dependente já pode ter seu próprio cartão!")
    }

}else{
    console.log("Consulte outras possibilidades do Labank.")
}

// 2)

if(idadeDependente >= 13 && idadeDependente <= 17){
    console.log("Seu dependente já pode ter um cartão vinculado ao seu.")
}else if(idadeDependente > 17){
    console.log("O dependente já pode ter seu próprio cartão!")
}else{
    console.log("Consulte outras possibilidades do Labank.")
} */

// If ternário

// O if ternário verifica em booleano a informação (variavel === ou qualquer operador (numero ou string)) ? condição 1 (if) : condição 2 (else)
/*

Faça uma última verificação nesse número, para verificar se o número é exatamente 13.

Caso seja 13, imprima "A idade do dependente é 13 e já pode ter um cartão."
Caso não seja, imprima "Verifique as opções possíveis".
Utilize um if ternário para resolver. */

/* idadeDependente === 13 ? console.log("A idade do dependente é 13 e já pode ter um cartão.") :
console.log("Verifique as opções possíveis") */

// Switch-case

// O switch-case é utilizado para fazer várias condições dependendo do que for requisitado, e chama-se de casos, para fazer
// alguma ação, após isso devemos usar break para interromper o caso e começar um novo, caso queira encerrar, utiliza default: ação

/* A Labank gostou muito do seu trabalho e quer implementar um serviço a escolha do cartão pelo
ramal telefonico.

- 1 para "Fácil"
- 2 para "Black"
- 3 para "Platinum"
- 4 para "Master Gold"

E caso não seja nenhuma dessas opções a mensagem deve ser "Escolha uma das quatro opções disponíveis." */

/* const escolhaCartao = Number(prompt("Solicitação de cartão de crédito: \n Digite a opção desejada: \n 1- Fácil \n 2- Black \n 3- Platinum \n 4- MasterGold"))

switch (escolhaCartao) {
    case 1:
        console.log("Cartão Fácil adiquirido.")
        break
    case 2:
        console.log("Cartão Black adiquirido.")
        break
    case 3:
        console.log("Cartão Platinum adiquirido.")
        break
    case 4:
        console.log("Cartão MasterGold adiquirido.")
        break
    default:
        console.log("Escolha uma das quatro opções disponíveis.")
} */

// Para guardar na cabeça

/*
1) Crie um código que receba um número por prompt e verifique se um número é divisível por 2 e por 3.
Faça isso:
a) Utilizando ifs aninhados
b) Utilizando um operador lógico para unir duas operações.

2) Dentro do if anterior, crie um if ternário que imprima um número surpresa que deve ser 30:
Caso o número seja 30, imprima no console "UFA ACERTEI!"
Caso não seja, imprima "Não foi dessa vez :("

3) Ainda dentro do if do exercício anterior, comente o ternário, e crie estrutura switch case que
verifique se o número é 6, 12, 18, 24 ou 30, imprima uma mensagem diferente pra cada número.
Caso não seja nenhum deles, imprima "o número é maior que 30 ou menor que 6."
*/

// 1 a)
const number = Number(prompt("Digite um número!"))

/* if(number % 2 === 0){
    if(number % 3 === 0){
        console.log(`O número ${number} é divisível por 2 e por 3`)
    }else{
        console.log(`O número ${number} é divisível por 2 mas não é por 3`)
    }
}else if(number % 3 === 0){
    console.log(`O número ${number} não é divisível por 2 mas é por 3`)
}else{
    console.log(`O número ${number} não é divisível por 2 nem por 3`)
} */

// 1 b)

if(number % 2 === 0 && number % 3 === 0){
    console.log(`O número ${number} é divisível por 2 e por 3`)
    /* number === 30 ? console.log("Ufa acertei!") : console.log("Não foi dessa vez :(") */
    switch (number) {
        case 6:
            console.log("Você acertou um dos números premiados e ganhou 1 real")
            break
        case 12:
            console.log("Você acertou um dos números premiados e ganhou 2 reais")
            break
        case 18:
            console.log("Você acertou um dos números premiados e ganhou 3 reais")
            break
        case 24:
            console.log("Você acertou um dos números premiados e ganhou 4 reais")
            break
        case 30:
            console.log("Você acertou um dos números premiados e ganhou 5 reais")
            break
        default:
            console.log("O número é maior que 30 ou menor que 6.")
    }
}else{
    console.log(`O número ${number} não é divisível por 2 e por 3`)
}