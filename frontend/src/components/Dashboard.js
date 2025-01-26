
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [stocks, setStocks] = useState([]);
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        axios.get('/api/stocks').then(response => {
            setStocks(response.data);
            calculateTotalValue(response.data);
        });
    }, []);

    const calculateTotalValue = (stocks) => {
        let total = 0;
        stocks.forEach(stock => {
            total += stock.quantity * stock.buyPrice; 
        });
        setTotalValue(total);
    };

    return (
        <div>
            <h1>Portfolio Dashboard</h1>
            <h2>Total Portfolio Value: ${totalValue}</h2>
            
        </div>
    );
};

export default Dashboard;