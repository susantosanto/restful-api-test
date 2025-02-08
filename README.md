# Restful API Test

## Project Overview
This project is a REST API-based CRUD application built using **Node.js** and **Express.js**. The application includes endpoints for user authentication (login), CRUD operations for users, and real-time data fetching from an external API. The database used is **MySQL/PostgreSQL**, and the project adheres to the requirements outlined in the test document.

### Features
- **Authentication**:
  - Login endpoint for user authentication.
- **CRUD Operations**:
  - Create, Read, Update, and Delete operations for user data.
- **Search Endpoints**:
  - Search data by `NAMA`, `NIM`, and `YMD` fields.
- **Real-Time Data Fetching**:
  - Fetch real-time data from [https://bit.ly/48ejMhW](https://bit.ly/48ejMhW).
- **Authorization**:
  - All endpoints (except login) require authentication via tokens.

---
## Prerequisites
Before running the application, ensure you have the following installed on your system:
- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **MySQL** database
- **Postman** or **Swagger** for API testing

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/susantosanto/restful-api-test.git
   cd restful-api-test
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Initialize the project:
   ```bash
   npm init
   ```
---

## Environment Variables
Create a `.env` file in the root directory of the project and add the following variables:

```env
PORT=3000
DB_HOST=localhost
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
JWT_SECRET=your_jwt_secret_key
EXTERNAL_API_URL=https://bit.ly/48ejMhW
```

---

