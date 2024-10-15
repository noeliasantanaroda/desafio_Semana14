const users = [];
const products = [];

// Capturar los valores del formulario de usuarios
const userForm = document.getElementById('userForm');
const userList = document.getElementById('userList');

userForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    if (username && email && age) {
        // Usamos rest para recibir múltiples usuarios
        addUsers({ name: username, email, age });
        userForm.reset();
    }
});

function addUsers(...newUsers) {  // Rest: recibe múltiples usuarios como parámetros
    users.push(...newUsers);  // Spread: añadimos todos los usuarios al array
    renderUserList();
}

function renderUserList() {
    userList.innerHTML = '';
    users.forEach(({ name, email, age }) => {  // Desestructuración en usuarios
        const li = document.createElement('li');
        li.textContent = `${name} - ${email}, ${age} años`;
        userList.appendChild(li);
    });
}

// Capturar los valores del formulario de productos
const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');

productForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const productName = document.getElementById('productName').value;
    const price = document.getElementById('price').value;
    const category = document.getElementById('category').value;

    if (productName && price && category) {
        // Usamos rest para recibir múltiples productos
        addProducts({ name: productName, price, category });
        productForm.reset();
    }
});

function addProducts(...newProducts) {  // Rest: recibe múltiples productos como parámetros
    products.push(...newProducts);  // Spread: añadimos todos los productos al array
    renderProductList();
}

function renderProductList() {
    productList.innerHTML = '';
    products.forEach(({ name, price, category }) => {  // Desestructuración en productos
        const li = document.createElement('li');
        li.textContent = `${name} - $${price} (Categoría: ${category})`;
        productList.appendChild(li);
    });
}

// Generar un reporte combinando ambos arrays usando spread
const reportButton = document.getElementById('generateReport');
const reportDiv = document.getElementById('report');

reportButton.addEventListener('click', function () {
    generateReport();
});

function generateReport() {
    // Usamos spread para crear copias de los arrays de usuarios y productos
    const allUsers = [...users];  // Spread: expandir el array de usuarios
    const allProducts = [...products];  // Spread: expandir el array de productos

    const report = `
        Usuarios registrados: ${allUsers.length}<br>
        Productos registrados: ${allProducts.length}<br>
        Productos: ${allProducts.map(({ name, price }) => `${name}: $${price}`).join(', ')} 
    `;

    reportDiv.innerHTML = report;  // Mostrar el reporte en el div
}
