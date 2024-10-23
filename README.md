# Função para Encontrar o Maior Número em um Array

Este projeto contém uma função em JavaScript que encontra e retorna o maior número presente em um array de números. A função percorre o array e compara cada valor, mantendo o maior encontrado.

## Como funciona

A função `encontreMaiorNumero(array)` recebe um array como argumento e utiliza uma variável para armazenar o maior número encontrado. Inicialmente, o maior número é definido como o primeiro elemento do array. Conforme percorre o array, a função compara cada elemento com o maior número atual e o atualiza quando um número maior é encontrado.

### Exemplo

```javascript
function encontreMaiorNumero(array) {
    let maiorArray = array[0];
  
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorArray) {
            maiorArray = array[i];
        }
    }
  
    return maiorArray;
}

console.log(encontreMaiorNumero([10, 44, 66, 34, 83, 99, 23])); // 99
