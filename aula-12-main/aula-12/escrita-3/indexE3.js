
/**
 * 
 * Crie uma fun��o para cada uma das opera��es b�sicas (soma, subtra��o, multiplica��o e divis�o).
 * 
 * Pe�a para o usu�rio inserir dois n�meros e chame essas 4 fun��es com esses valores inseridos pelo usu�rio sendo o argumento. Por fim, mostre no console o resultado das opera��es:
 * 
 * Exemplo:
 * 
 * N�meros inseridos: 30 e 3
 * Soma: 33
 * Diferen�a: 27
 * Multiplica��o: 90
 * Divis�o: 10
 * 
 * Dica: lembre-se de converter a entrada do usu�rio para n�mero antes de fazer os c�lculos.
 * 
**/

let numero1 = Number (prompt('Digite os números que seram somados, subtraidos, multiplicados e divididos:'))
let numero2 = Number (prompt('segundo número da operação:'))

function calculadora (numero1, numero2) {
    console.log (`A soma dos números é: ${numero1 + numero2}`),
    console.log (`A subtração dos números é: ${numero1 - numero2}`),
    console.log (`A multiplicação dos números é: ${numero1 * numero2}`),
    console.log (`A divição dos números é: ${numero1 % numero2}`)
    console.log (`A divição(Segundo modo) dos números é: ${numero1 / numero2}`)
    return
}

calculadora(numero1, numero2)