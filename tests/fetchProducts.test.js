require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // expect.assertions(5);

  it('1 - Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('2 - Verifica se, ao chamar a função fetchProducts com o argumento "computador", a função fetch é chamada', async () => {
    const callFetchProducts = await fetchProducts('computador');
    expect(fetch).toReturn();
  });
  
  it('3 - Verifica se, ao chamar a função fetchProducts com o argumento "computador", a função fetch é chamada com o endpoint indicado', async () => {
    const url = await 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    const callFetchProducts = await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('4 - Verifica se, ao chamar a função fetchProducts com o argumento "computador", o retorno é igual ao objeto computadorSearch', async () => {
    const callFetchProducts = await fetchProducts('computador');
    expect(callFetchProducts).toEqual(computadorSearch.results);
  });

  it('5 - Verifica se, ao chamar a função fetchProducts sem argumento, retorna a mensagem "You must provide an url"', async () => {
    const callFetchProducts = await fetchProducts();
    expect(callFetchProducts).toEqual(new Error('You must provide an url'));
  })

});
