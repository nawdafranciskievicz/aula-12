
// Leia o c�digo

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

/**
 * 
 * a) Explique o que essa função faz e qual é sua utilidade.
 * a função dela é dizer se o usuario escreveu cenoura, se ele escrever: CeNoUrA, não está errado mas o codigo vai colcoar tudo em caixa baixa (cenoura) para ser mais facil de identificar se o usuario escreveu cenoura na frase.
 * b) Determine qual ser� a sa�da no console para cada uma das 3 entradas do usu�rio:
 * - Eu gosto de cenoura. true, pq tem cenoura na frase.
 * - CENOURA é bom pra vista. true, pq tem cenoura na frase. 
 * - Cenouras crescem na terra. false, pq a palavra cenoura está no plural e o codigo apenas considera true as que estão no singular.
 * 
**/
