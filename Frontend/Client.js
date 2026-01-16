// Client.js - Frontend connection to server.py

const API_URL = 'http://localhost:5000';

// DOM Elements
const connectBtn = document.getElementById('connect-btn');
const messageDiv = document.getElementById('message');

// Fetch data from Python backend
async function connectToServer() {
    try {
        messageDiv.textContent = 'Connecting...';
        
        const response = await fetch(`${API_URL}/api/hello`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        messageDiv.textContent = data.message || 'Connected successfully!';
        messageDiv.style.color = '#28a745';
    } catch (error) {
        console.error('Connection error:', error);
        messageDiv.textContent = `Error: ${error.message}`;
        messageDiv.style.color = '#dc3545';
    }
}

// Event listener
if (connectBtn) {
    connectBtn.addEventListener('click', connectToServer);
}

// Auto-connect on page load (optional)
document.addEventListener('DOMContentLoaded', () => {
    console.log('Frontend loaded. Ready to connect to server.py');
});