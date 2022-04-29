const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it('1 - Verifica se ao executar saveCartItems com o argumento "<ol><li>Item</li></ol>" o método localStorage.setItem é chamado', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('2 - Verifica se ao executar saveCartItems com o argumento "<ol><li>Item</li></ol>" o método localStorage.setItem é chamado, é chamado com dois parâmetros, sendo o primeiro "cartItems" e o segundo o valor passado como argumento de saveCartItems', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });

});
