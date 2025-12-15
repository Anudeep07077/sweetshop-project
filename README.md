--> Sweet Shop Management System


# Project Scope Clarification

This project focuses on demonstrating full-stack development fundamentals including
frontend-backend integration, REST API design, database persistence, and clean code practices.
Due to time and scope constraints, authentication and authorization are implemented as
UI flows only on the frontend. Backend authentication using JWT and role-based access
(Spring Security) is identified as a future enhancement and is intentionally not included
in this iteration.
A full-stack Sweet Shop Management application developed as part of a technical assignment.  
The project demonstrates clean frontend design, REST API integration, and database persistence.


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

-->  🤖 My AI Usage

AI tools were used as a productivity aid during the development of this project.

--> Tools Used
- ChatGPT (OpenAI)

--> How AI Was Used
- To clarify backend architecture and REST API design decisions.
- To troubleshoot configuration issues related to Spring Boot, MySQL, and Maven.
- To generate boilerplate code suggestions which were then manually reviewed,
  modified, and integrated.
- To improve code readability and refactor frontend React components.
- To assist in understanding Git workflows and best practices.

--> Reflection
AI significantly improved development speed and helped resolve blockers faster.
However, all business logic, architectural decisions, and final implementations
were fully understood, reviewed, and customized by me. AI was used as a support
tool rather than a replacement for reasoning or design decisions.

--> ScreenShots
<img width="1919" height="1079" alt="Screenshot 2025-12-15 172404" src="https://github.com/user-attachments/assets/28f449c8-3ef8-451b-bdd3-e1043c2d4d0e" />
<img width="1919" height="1079" alt="Screenshot 2025-12-15 172351" src="https://github.com/user-attachments/assets/f71859f6-bc9f-4953-9145-cda1dd4c7c19" />
<img width="1919" height="1079" alt="Screenshot 2025-12-15 172323" src="https://github.com/user-attachments/assets/e2398e15-6edb-47cc-ae47-0ff96290eac3" />
<img width="1919" height="1079" alt="Screenshot 2025-12-15 172309" src="https://github.com/user-attachments/assets/4cdf800f-f685-48b1-9295-b83ff9512dc1" />
<img width="1919" height="1077" alt="Screenshot 2025-12-15 172257" src="https://github.com/user-attachments/assets/138c43b0-ebe7-48e6-b229-0912d2fb40e2" />
<img width="1919" height="1079" alt="Screenshot 2025-12-15 172238" src="https://github.com/user-attachments/assets/ca16f1fe-a1ff-4b13-98c6-1eb484a4c296" />

