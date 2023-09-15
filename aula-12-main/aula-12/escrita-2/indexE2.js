
/**
 * 
 * Escreva as fun��es explicadas abaixo:
 * 
 * a) Escreva uma fun��o que receba 2 n�meros como par�metros, e, dentro da fun��o, fa�a a soma das duas entradas e retorne o resultado. Invoque a fun��o e imprima no console o resultado.
 * 
 * b) Fa�a uma fun��o que recebe 2 n�meros e retorne um booleano que informa se o primeiro n�mero � maior ou igual ao segundo.
 * 
 * c) Escreva uma fun��o que receba um n�mero e devolva um booleano indicando se ele � par ou n�o.
 * 
 * d) Fa�a uma fun��o que recebe uma mensagem (string) como par�metro e imprima o tamanho dessa mensagem, juntamente com uma vers�o dela em letras mai�sculas.
 * 
**/

function calculadora (numero1, numero2) {
    console.log(`A soma dos numero é de ${numero1 + numero2}`)
}

function parOuImpar (numero) {
    console.log(`O numero dado é par ou impar? ${numero % 2 == 0}`)
}

function numeradorMaiusculo (palavra) {
    console.log(`${palavra}`.toUpperCase())
}

calculadora (4, + 6)
parOuImpar (3)
numeradorMaiusculo ()