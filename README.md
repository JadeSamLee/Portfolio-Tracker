# Stock Portfolio Management Application

## Overview
This project is a web-based stock portfolio management application that allows users to manage their stock investments effectively. The application consists of a responsive frontend built with React and a robust backend developed using Java with Spring Boot. It integrates real-time stock data to provide users with up-to-date information on their portfolio's performance.

## Features
### Frontend
- **Responsive Dashboard**: Displays portfolio metrics and stock performance.
- **Stock Management Form**: Allows users to add or edit stock details including stock name, ticker, quantity, and buy price.
- **Current Holdings Table**: Lists all current stock holdings with options to edit or delete entries.

### Backend
- **RESTful APIs**:
  - Add a new stock.
  - Update existing stock details.
  - Delete a stock.
  - Fetch all stocks and calculate the total portfolio value.
- **Database Interaction**: Utilizes JPA and Hibernate for seamless database operations.
- **Exception Handling**: Implements proper exception handling with meaningful HTTP status codes.

### Database
- **MySQL Database**: Stores stock details such as stock name, ticker, quantity, and buy price. The schema is designed to include relevant relationships, such as between users and their portfolios.

## Instructions for Running the Project Locally
1. Clone the repository from GitHub:
   ```bash
   git clone https://github.com/JadeSamLee/stock-portfolio-manager.git
   ```
2. Navigate to the backend directory and install dependencies:
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```
3. In another terminal window, navigate to the frontend directory:
   ```bash
   cd frontend
   npm install
   npm start
   ```
4. Access the application at `http://localhost:3000`.

## Assumptions and Limitations
- The application assumes that each user will only have one share of each randomly assigned stock.
- Real-time data fetching relies on third-party APIs which may have rate limits or downtime.

