require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {

  it('1 - Verifica se fecthItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('2 - Verifica se, ao chamar a função fetchItem com o argumento "MLB1615760527", a função fetch é chamada', async () => {
    const callFetchItem = await fetchItem('MLB1615760527');
    expect(fetch).toReturn();
  });

  it('3 - Verifica se, ao chamar a função fetchItem com o argumento "MLB1615760527", a função fetch é chamada com o endpoint indicado', async () => {
    const url = await 'https://api.mercadolibre.com/items/MLB1615760527';
    const callFetchItem = await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('4 - Verifica se, ao chamar a função fetchItem com o argumento "MLB1615760527", o retorno é igual ao objeto item', async () => {
    const callFetchItem = await fetchItem('MLB1615760527');
    expect(callFetchItem).toEqual(item);
  });

  it('5 - Verifica se, ao chamar a função fetchItem sem argumento, retorna a mensagem "You must provide an url"', async () => {
    const callFetchItem = await fetchItem();
    expect(callFetchItem).toEqual(new Error('You must provide an url'));
  })
});
