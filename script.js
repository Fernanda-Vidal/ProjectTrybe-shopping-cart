function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function cartItemClickListener(event) {
  event.target.remove();
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const getIdProduct = async (event) => {
  const idProduct = await fetchItem(event.target.parentNode.firstChild.innerText);
  const { id, title, price } = idProduct;
  const cartItems = document.querySelector('.cart__items');
  const produto = cartItems.appendChild(createCartItemElement({ id, title, price }));
  saveCartItems(produto);
};
// getIdProduct('MLB1341706310');

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
  .addEventListener('click', getIdProduct);

  return section;
}

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

const getArrayProduct = async (product) => {
  const arrayProduct = await fetchProducts(product);
  const items = document.querySelector('.items');
  arrayProduct.forEach((element) => {
    const { id, title, thumbnail } = element;
    items.appendChild(createProductItemElement({ sku: id, name: title, image: thumbnail }));
  });
};
// console.log(getArrayProduct());

const clearCart = () => {
  const ol = document.querySelector('.cart__items');
  ol.innerHTML = '';
};

const clear = document.querySelector('.empty-cart');
clear.addEventListener('click', clearCart);

window.onload = () => getArrayProduct('computador');
