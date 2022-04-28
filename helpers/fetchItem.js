const fetchItem = (Itemid) => {
  const url = `https://api.mercadolibre.com/items/${Itemid}`;

  const item = fetch(url)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => error);

  return item;
};
// console.log(fetchItem('MLB1341706310'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
