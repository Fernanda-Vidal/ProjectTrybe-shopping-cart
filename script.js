const olCartItems = document.querySelector('.cart__items');
const totalCart = document.querySelector('.total-price');

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

const sumTotal = () => {
  const cartItems = document.querySelectorAll('.cart__item');
  let priceItens = 0;
  cartItems.forEach((item) => {
    const price = Number(item.innerText.split('$')[1]);
    priceItens += price;
    console.log(priceItens);
  });
  totalCart.innerText = priceItens;
  localStorage.setItem('total', priceItens);
};
// sumTotal()

function cartItemClickListener(event) {
  event.target.remove();
  saveCartItems(olCartItems.innerHTML);
  sumTotal();
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
  olCartItems.appendChild(createCartItemElement({ id, title, price }));
  saveCartItems(olCartItems.innerHTML);
  sumTotal();
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

const createLoading = () => {
const container = document.querySelector('.container');
const span = document.createElement('span');
span.className = 'loading';
span.innerHTML = 'carregando...';
container.appendChild(span);
};
// createLoading();

const cleanLoading = () => {
  const span = document.querySelector('.loading');
  span.remove();
};

const getArrayProduct = async (product) => {
  const arrayProduct = await fetchProducts(product);
  const items = document.querySelector('.items');
  arrayProduct.forEach((element) => {
    const { id, title, thumbnail } = element;
    items.appendChild(createProductItemElement({ sku: id, name: title, image: thumbnail }));
  });
  cleanLoading();
};
// console.log(getArrayProduct());

const clearCart = () => {
  olCartItems.innerHTML = '';
  localStorage.removeItem('cartItems');
  totalCart.innerText = 0;
};

const clear = document.querySelector('.empty-cart');
clear.addEventListener('click', clearCart);

const getItems = () => {
  const getProducts = getSavedCartItems('cartItems');
  const recuperaOlCartItems = document.querySelector('.cart__items');
  recuperaOlCartItems.innerHTML = getProducts;
  const liCartItems = document.querySelectorAll('.cart__item');
  liCartItems.forEach((itemSalvo) => {
    itemSalvo.addEventListener('click', cartItemClickListener);
  });
  const getTotal = getSavedCartItems('total');
  totalCart.innerHTML = getTotal;
};

window.onload = () => {
  createLoading();
  getArrayProduct('computador');
  getItems();
};
