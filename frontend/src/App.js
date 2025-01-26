import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard';
import StockForm from './components/StockForm';
import StockList from './components/StockList';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => {
    const [stocks, setStocks] = useState([]);
    const [selectedStock, setSelectedStock] = useState(null);

    const fetchStocks = () => {
        axios.get('/api/stocks').then(response => {
            setStocks(response.data);
        });
    };

    useEffect(() => {
        fetchStocks();
    }, []);

    const handleSave = () => {
        fetchStocks();
        setSelectedStock(null);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Portfolio Tracker</h1>
            <StockForm stock={selectedStock} onSave={handleSave} />
            <StockList stocks={stocks} onUpdate={setSelectedStock} />
            <Dashboard />
        </div>
    );
};

export default App;