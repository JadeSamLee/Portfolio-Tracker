import React from 'react';
import axios from 'axios';

const StockList = ({ stocks, onUpdate }) => {
    const handleDelete = (id) => {
        axios.delete(`/api/stocks/${id}`).then(onUpdate);
    };

    return (
        <ul>
            {stocks.map(stock => (
                <li key={stock.id}>
                    {stock.name} ({stock.ticker}) - {stock.quantity} shares at ${stock.buyPrice}
                    <button onClick={() => onUpdate(stock)}>Edit</button>
                    <button onClick={() => handleDelete(stock.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default StockList;