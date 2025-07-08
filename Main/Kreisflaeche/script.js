// script.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Get references to elements
    const radiusInput = document.getElementById('radius');
    const calcBtn = document.getElementById('calcBtn');
    const resultDiv = document.getElementById('result');

    // Calculate area of circle
    function calculateArea() {
        const r = parseFloat(radiusInput.value);
        if (isNaN(r) || r <= 0) {
            resultDiv.textContent = 'Bitte gib einen gültigen Radius ein.';
            return;
        }
        const area = Math.PI * r * r;
        resultDiv.textContent = `Kreisfläche: ${area.toFixed(2)}`;
    }

    calcBtn.addEventListener('click', calculateArea);
});