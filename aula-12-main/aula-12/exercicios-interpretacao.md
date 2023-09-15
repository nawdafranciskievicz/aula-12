
# Interpreta��o de c�digo

Tente responder os exerc�cios dessa se��o sem executar o c�digo. Se ficar muito dif�cil, pode rodar no seu computador para analisar e pensar sobre o resultado.

---

#### 1. Leia o c�digo.

```
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
```

a) O que vai ser impresso no console?

b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a fun��o `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

---

#### 2. Leia o c�digo.

```
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
```

a. Explique o que essa fun��o faz e qual � sua utilidade.

b. Determine qual ser� a sa�da no console para cada uma das 3 entradas do usu�rio:
- Eu gosto de cenoura.
- CENOURA � bom pra vista.
- Cenouras crescem na terra.
