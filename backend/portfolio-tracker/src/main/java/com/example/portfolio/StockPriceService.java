package com.example.portfolio;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class StockPriceService {
    private final String API_URL = "https://api.example.com/stock/{ticker}";

    public double getCurrentPrice(String ticker) {
        RestTemplate restTemplate = new RestTemplate();
        StockPriceResponse response = restTemplate.getForObject(API_URL, StockPriceResponse.class, ticker);
        return response.getPrice();
    }
}