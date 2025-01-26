import React, { useState } from 'react';
import axios from 'axios';

const StockForm = ({ stock, onSave }) => {
    const [name, setName] = useState(stock ? stock.name : '');
    const [ticker, setTicker] = useState(stock ? stock.ticker : '');
    const [quantity, setQuantity] = useState(stock ? stock.quantity : 1);
    const [buyPrice, setBuyPrice] = useState(stock ? stock.buyPrice : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const stockData = { name, ticker, quantity, buyPrice };
        if (stock) {
            axios.put(`/api/stocks/${stock.id}`, stockData).then(onSave);
        } else {
            axios.post('/api/stocks', stockData).then(onSave);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Stock Name" required />
            <input type="text" value={ticker} onChange={(e) => setTicker(e.target.value)} placeholder="Ticker" required />
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" required />
            <input type="number" value={buyPrice} onChange={(e) => setBuyPrice(e.target.value)} placeholder="Buy Price" required />
            <button type="submit">{stock ? 'Update' : 'Add'} Stock</button>
        </form>
    );
};

export default StockForm;