const { ipcRenderer } = require('electron');

document.getElementById('addBookForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const record = {
        // number: document.getElementById('number').value,
        date_received: document.getElementById('date_received').value,
        class: document.getElementById('class').value,
        author: document.getElementById('author').value,
        title_of_book: document.getElementById('title_of_book').value,
        edition: document.getElementById('edition').value,
        volume: document.getElementById('volume').value,
        pages: document.getElementById('pages').value,
        source_of_fund: document.getElementById('source_of_fund').value,
        cost_price: document.getElementById('cost_price').value,
        publisher: document.getElementById('publisher').value,
        year: document.getElementById('year').value,  // Added Year field
        remarks: document.getElementById('remarks').value,
    };
    ipcRenderer.invoke('addBook', record).then(() => {
        window.close();
    });
});

// Round cost price to two decimal places on blur
const costPriceInput = document.getElementById('cost_price');
costPriceInput.addEventListener('blur', function () {
    const value = parseFloat(this.value);
    if (!isNaN(value)) {
        this.value = value.toFixed(2);
    }
});


// Get today's date in the format YYYY-MM-DD
const today = new Date().toISOString().split('T')[0];
document.getElementById('date_received').setAttribute('max', today);
