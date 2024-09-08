const apiUrl = 'http://localhost:8000/api/stocks/';

document.addEventListener('DOMContentLoaded', () => {
    fetchStocks();

    document.getElementById('stock-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const tickerSymbol = document.getElementById('ticker-symbol').value;
        const price = document.getElementById('price').value;
        
        axios.post(apiUrl, { name, ticker_symbol: tickerSymbol, price })
            .then(() => {
                fetchStocks();
                document.getElementById('stock-form').reset();
            });
    });
});

function fetchStocks() {
    axios.get(apiUrl)
        .then(response => {
            const stocks = response.data;
            let stockListHtml = '<ul class="list-group">';
            stocks.forEach(stock => {
                stockListHtml += `
                    <li class="list-group-item">
                        ${stock.name} (${stock.ticker_symbol}) - $${stock.price}
                        <button class="btn btn-danger btn-sm float-right ml-2" onclick="deleteStock(${stock.id})">Delete</button>
                        <button class="btn btn-warning btn-sm float-right" onclick="editStock(${stock.id}, '${stock.name}', '${stock.ticker_symbol}', ${stock.price})">Edit</button>
                    </li>
                `;
            });
            stockListHtml += '</ul>';
            document.getElementById('stock-list').innerHTML = stockListHtml;
        });
}

function deleteStock(id) {
    axios.delete(`${apiUrl}${id}/`)
        .then(() => fetchStocks());
}

function editStock(id, name, tickerSymbol, price) {
    // Code to handle stock editing
}
