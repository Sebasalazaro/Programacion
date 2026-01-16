# Proyecto Web - Backend & Frontend

Una aplicación web con servidor Python y cliente JavaScript.

## 📋 Descripción

Este proyecto consiste en una aplicación web full-stack con:
- **Backend**: Servidor desarrollado en Python
- **Frontend**: Cliente desarrollado en JavaScript

## 🚀 Requisitos

- Python 3.x
- Node.js (opcional, para gestión de dependencias del frontend)
- Navegador web moderno

## 📦 Instalación

### Backend
```bash
cd Backend
pip install flask flask-cors
```

### Frontend
No requiere instalación adicional, solo un navegador web.

## 💻 Uso

### 1. Iniciar el Backend
Abre una terminal y ejecuta:
```bash
cd Backend
python Server.py
```
El servidor se iniciará en `http://localhost:5000`

### 2. Abrir el Frontend
Opción A - Abrir directamente:
- Navega a la carpeta `Frontend`
- Abre el archivo `index.html` en tu navegador

Opción B - Con servidor local (recomendado):
```bash
cd Frontend
python -m http.server 8000
```
Luego abre `http://localhost:8000` en tu navegador

### 3. Usar la aplicación
- Completa el formulario con nombre, precio y descripción del producto
- Haz clic en "Crear Producto"
- El producto aparecerá en la lista automáticamente

## 🔌 API Endpoints

- `GET /` - Mensaje de bienvenida
- `GET /health` - Estado del servidor
- `POST /api/products` - Crear nuevo producto
- `GET /api/products` - Obtener todos los productos

## 📁 Estructura del Proyecto

```
.
├── Backend/
│   └── Server.py       # Servidor principal
├── Frontend/
│   └── Client.js       # Cliente principal
└── README.md
```

## 🛠️ Tecnologías

- Python
- JavaScript

## 📝 Licencia

Este proyecto es de código abierto.

---

Desarrollado con ❤️
