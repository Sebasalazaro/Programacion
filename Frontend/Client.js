// Client.js - Frontend connection to server.py

const API_URL = 'http://localhost:5000';

// Crear producto
async function createProduct(event) {
    event.preventDefault();
    
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const description = document.getElementById('product-description').value;
    
    try {
        const response = await fetch(`${API_URL}/api/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                price: parseFloat(price),
                description: description
            })
        });

        const data = await response.json();
        
        if (response.ok) {
            showMessage(`✓ Producto creado: ${data.product.name}`, 'success');
            document.getElementById('product-form').reset();
            loadProducts(); // Recargar lista
        } else {
            showMessage(`✗ Error: ${data.message}`, 'error');
        }
    } catch (error) {
        console.error('Error:', error);
        showMessage(`✗ Error de conexión: ${error.message}`, 'error');
    }
}

// Cargar todos los productos
async function loadProducts() {
    try {
        const response = await fetch(`${API_URL}/api/products`);
        const data = await response.json();
        
        const productList = document.getElementById('product-list');
        
        if (data.products.length === 0) {
            productList.innerHTML = '<p>No hay productos aún. ¡Crea el primero!</p>';
            return;
        }
        
        productList.innerHTML = data.products.map(product => `
            <div class="product-card">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <p>${product.description || 'Sin descripción'}</p>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error cargando productos:', error);
        showMessage('Error al cargar productos', 'error');
    }
}

// Mostrar mensajes
function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    if (messageDiv) {
        messageDiv.textContent = message;
        messageDiv.className = `message ${type}`;
        messageDiv.style.display = 'block';
        
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 3000);
    }
}

// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', () => {
    console.log('Frontend cargado y conectado al servidor');
    
    // Configurar formulario
    const form = document.getElementById('product-form');
    if (form) {
        form.addEventListener('submit', createProduct);
    }
    
    // Cargar productos iniciales
    loadProducts();
});