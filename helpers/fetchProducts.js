const fetchProducts = (key) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${key}`;

  // if (!key) {
  //   throw new Error('You must provide an url');
  // }

  // try {
    const product = fetch(url)
    .then((response) => response.json())
    .then((data) => data.results)
    .catch(() => new Error('You must provide an url'));
    
    return product;
// } catch (error) {
//     return error.message;
//   }

};
// console.log(fetchProducts());

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}