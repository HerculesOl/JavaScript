// // DEFININDO UMA ARRAY
// console.log("ARRAY")
// let colors = ['Pink','Red','Green','Black']
// document.writeln("Array colors: "+colors)

// //ACESSAR ARRAY UTILIZANDO UM ITEM NÚMERICO
// document.writeln("<br>Selecionando a cor 2 da array: "+colors[2])

// // Length--> Identificar numero de elementos de uma array
// document.writeln("<br>Quantas cores tem: "+colors.length)

// // MANIPULAÇÃO DE ARRAY
// const frutas = ['Maça','Banana','Pêra','Melancia']
// document.writeln("<br>Array Frutas: "+frutas)

// // ADICIONA UM ELEMENTO NO FINAL DA ARRAY
// frutas.push("Abacate")
// document.write("<br>Depois de adicionar: "+frutas)

// // ADICIONAR UM ELEMENTO NO INICIO
// frutas.unshift("Manga")
// document.write("<br>Depois de adicionar no inicio: "+frutas)

// // REMOVER O PRIMEIRO ELEMENTO DO ARRAY
// frutas.shift()
// document.write("<br>Depois de remover: "+frutas)

// // REMOVER UM ELEMENTO ESPECIFICO 
// frutas.splice(2,2)
// document.write("<br>Depois de remover: "+frutas)

// // SEPARAR ITENS DO ARRAY
// document.write("<br>Depois de separar com: "+frutas.map(String).join(' - '))

// // USANDO LOOP FOR

// for(let i =0; i < frutas.length; i++){
//     document.write("<br> "+frutas[i])
// }

// // forEach
// let carros = ['Jep', 'saveiro', 'F1000','Hilux','Camaro']
// carros.forEach( (valor,indice) => {
//     document.write(`<br> Índice: ${indice} - Valor: ${valor}`)
// })


// // INVERTER ARRAY
// function inverterArray(arr){
//     let arrayInvertido = []
//     for (let i = arr.length - 1; i >= 0; i--){
//         arrayInvertido.push(arr[i])
//     }
//     return arrayInvertido
// }
 
// let array=[1,2,3,4,5]
// let arrayInvertido = inverterArray(array)
// console.log(arrayInvertido)

// RETORNAR O MAIOR
// function maiorNumero(arr){
//     let maior = arr[0]
//     for (let i =  1; i < arr.length; i++){
//         if(arr[i] > maior){
//             maior = arr[i]
//         }
//     }
//     return maior
// }

// let numeros = [45,67,23,56]
// console.log(maiorNumero(numeros))

// SOMA TODOS OS ELEMENTOS DE UMA ARRAY
// function sommarElementos(arr){
//     let soma = 0
//     for(let i = 0; i < arr.length; i++){
//         soma += arr[i]
//     }
//     return soma
// }

// let numeros = [10,20,30,40];
// console.log(sommarElementos(numeros))


// REMOVER NUMEROS DUPLICADOS DE UMA ARRAY
// function removerDuplicatas(arr){
//     const unico = []
//     for(let i = 0; i < arr.length; i++){
//         if(!unico.includes(arr[i])){
//             unico.push(arr[i])
//     }
// }
// return unico
// }
// let numeros=[1,1,2,2,3,3,4,4,5,5]
// console.log(removerDuplicatas(numeros))

// // RECEBE NUMEROS E RETORNA OUTRA FUNCAO DE MULTIPLIQUE
// function multiplicador(num){
//     return function(valor){
//         return valor * num
//     }
// }

// const multiplicar2 = multiplicador(2)
// console.log(multiplicar(5))

// const multiplicar10 = multiplicador(10)
// console.log(multiplicar(3))

