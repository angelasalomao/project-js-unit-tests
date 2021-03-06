const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const produtos = productDetails('Alcool gel', 'Máscara');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(productDetails).toBeInstanceOf(Function);
    // Teste se o retorno da função é um array.
    expect(produtos).toBeInstanceOf(Array);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(produtos).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(produtos[0]).toBeInstanceOf(Object);
    expect(produtos[1]).toBeInstanceOf(Object);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(produtos[0]).not.toEqual(produtos[1])
    // Teste se os dois productIds terminam com 123.
    // Usei a expressão regular (regex) para verificar o que o teste pediu
    // link do local que testei o uso da expressão https://regexr.com/
    expect(produtos[0].details.productId).toMatch(/(123)$/g)
    expect(produtos[1].details.productId).toMatch(/(123)$/g)
  });
});
