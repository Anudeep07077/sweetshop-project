--> Sweet Shop Management System

A full-stack Sweet Shop Management application developed as part of a technical assignment.  
The project demonstrates clean frontend design, REST API integration, and database persistence.

---

--> Tech Stack

--> Frontend
- React (Vite)
- JavaScript
- CSS (Glassmorphism UI)

--> Backend
- Java 17
- Spring Boot
- Spring Data JPA
- REST APIs

--> Database
- MySQL

--> Tools
- Maven
- npm
- Git & GitHub

---

--> Features

- View sweets fetched from backend API
- Add sweets to cart
- Automatically decrease available quantity
- Remove items from cart
- Cart total price calculation
- Checkout functionality
- Orders stored in database
- Clean and readable code structure
- Modern glass-style UI


--> Project Structure
SweetShop_Project/
├── sweetshop-frontend
└── sweetshop-backend


--> How to Run the Project
-->  Backend Setup

--> Create MySQL database:
sql
CREATE DATABASE sweetshop;

--> Update database credentials in:
sweetshop-backend/src/main/resources/application.properties

--> Run backend:
mvn clean package -DskipTests
java -jar target/sweetshop-backend-0.0.1-SNAPSHOT.jar

Backend runs on:
http://localhost:8080

-->  Frontend Setup
--> cd sweetshop-frontend
npm install
npm run dev

--> Frontend runs on:
http://localhost:5173

-->  API Endpoints
Get Sweets
GET /api/sweets

--> Place Order
POST /api/orders

--> Request Body:
{
  "totalAmount": 450
}

--> Authentication Note

Login and Register screens are implemented as UI flows for demonstration purposes.
Backend authentication (Spring Security, JWT) can be added in future iterations.