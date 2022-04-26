const fetchProducts = (key) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${key}`;

  const product = fetch(url)
  .then((response) => response.json())
  .then((data) => data.results)
  .catch((error) => error.message);

  return product;
};
// console.log(fetchProducts('computador'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

// fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador')
//   .then((response) => response.json())
//   .then((data) => data.results)
//   .catch((error) => error.message)