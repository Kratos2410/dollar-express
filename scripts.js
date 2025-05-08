
function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
  if (id === 'carrito') loadCart();
}

function addToCart(productName) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(productName);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(productName + ' agregado al carrito');
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';
  if (cart.length === 0) {
    cartItems.innerHTML = '<p>Tu carrito está vacío.</p>';
    return;
  }
  cart.forEach((item, index) => {
    cartItems.innerHTML += `<p>${index + 1}. ${item}</p>`;
  });
}

function sendToWhatsApp() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    alert('Tu carrito está vacío');
    return;
  }
  let message = 'Hola, quiero ordenar lo siguiente:%0A' + cart.map((item, i) => `${i + 1}. ${item}`).join('%0A');
  let phone = '50557968642'; // Reemplaza con tu número real
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

function filterProducts() {
  const category = document.getElementById('categoryFilter').value;
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    if (category === 'all' || product.dataset.category === category) {
      product.classList.remove('hidden');
    } else {
      product.classList.add('hidden');
    }
  });
}

function searchProducts() {
  const searchTerm = document.getElementById('searchBar').value.toLowerCase();
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    const name = product.dataset.name.toLowerCase();
    if (name.includes(searchTerm)) {
      product.classList.remove('hidden');
    } else {
      product.classList.add('hidden');
    }
  });
}
