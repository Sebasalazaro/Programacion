from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Almacenamiento temporal de productos (en memoria)
products = []

@app.route('/', methods=['GET'])
def hello_world():
    """Root endpoint returning hello world message"""
    return jsonify({
        'message': 'Hello World',
        'status': 'success'
    }), 200

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint for monitoring"""
    return jsonify({
        'status': 'healthy',
        'service': 'Backend API'
    }), 200

@app.route('/api/products', methods=['POST'])
def create_product():
    """Create a new product"""
    try:
        data = request.get_json()
        
        # Validación básica
        if not data or 'name' not in data or 'price' not in data:
            return jsonify({
                'status': 'error',
                'message': 'Name and price are required'
            }), 400
        
        # Crear nuevo producto
        product = {
            'id': len(products) + 1,
            'name': data['name'],
            'price': data['price'],
            'description': data.get('description', '')
        }
        
        products.append(product)
        
        return jsonify({
            'status': 'success',
            'message': 'Product created successfully',
            'product': product
        }), 201
        
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

@app.route('/api/products', methods=['GET'])
def get_products():
    """Get all products"""
    return jsonify({
        'status': 'success',
        'products': products,
        'count': len(products)
    }), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)