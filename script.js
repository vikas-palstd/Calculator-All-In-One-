// Switching Tabs
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.dataset.tab;

        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.add('hidden');
        });

        // Show the selected tab
        document.getElementById(target).classList.remove('hidden');
    });
});

// Basic Calculator
let basicExpression = '';
function basicInput(value) {
    basicExpression += value;
    document.getElementById('basic-display').value = basicExpression;
}
function calculateBasic() {
    try {
        basicExpression = eval(basicExpression);
        document.getElementById('basic-display').value = basicExpression;
    } catch {
        document.getElementById('basic-display').value = 'Error';
    }
}
function clearBasic() {
    basicExpression = '';
    document.getElementById('basic-display').value = '';
}

// Scientific Calculator
let scientificExpression = '';
function scientificInput(value) {
    scientificExpression += value;
    document.getElementById('scientific-display').value = scientificExpression;
}
function scientificCalculate() {
    try {
        scientificExpression = math.evaluate(scientificExpression); // Using Math.js
        document.getElementById('scientific-display').value = scientificExpression;
    } catch {
        document.getElementById('scientific-display').value = 'Error';
    }
}
function clearScientific() {
    scientificExpression = '';
    document.getElementById('scientific-display').value = '';
}

// Graphing Calculator
function plotGraph() {
    const equation = document.getElementById('graph-input').value;
    const canvas = document.getElementById('graphCanvas');
    const context = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    context.clearRect(0, 0, width, height);

    context.beginPath();
    context.strokeStyle = '#6fdf91';

    for (let x = -width / 2; x < width / 2; x++) {
        const px = width / 2 + x;
        const py = height / 2 - Math.sin(x / 30) * 100; // Example sin(x)
        if (x === -width / 2) context.moveTo(px, py);
        else context.lineTo(px, py);
    }
    context.stroke();
}

// Financial Calculator
function calculateCompound() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseInt(document.getElementById('years').value);
    const compound = parseInt(document.getElementById('compound').value);
    const currency = document.getElementById('currency').value;

    if (isNaN(principal) || isNaN(rate) || isNaN(years) || isNaN(compound)) {
        document.getElementById('financial-result').textContent = "Please fill in all fields correctly.";
        return;
    }

    const result = principal * Math.pow((1 + rate / compound), compound * years);

    // Format result based on selected currency
    const formattedResult = currency === 'USD' 
        ? `$${result.toFixed(2)}` 
        : `₹${result.toFixed(2)}`;

    document.getElementById('financial-result').textContent = `Future Value: ${formattedResult}`;
}
