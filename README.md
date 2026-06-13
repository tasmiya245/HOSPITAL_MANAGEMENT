# Hospital Management System

## Project Overview
The Hospital Management System is a database-driven application developed as a DBMS mini project. It manages hospital operations such as patient registration, doctor management, appointments, treatments, and billing. The system uses MySQL for database management and a simple web interface for accessing patient information.

---

## Features

- Manage Departments
- Manage Doctors
- Manage Patients
- Schedule Appointments
- Record Treatments
- Generate Bills
- View Patient and Doctor Details
- SQL Joins, Views, Stored Procedures, and Triggers
- Frontend and Backend Integration
- REST API for Patient Data

---

## Technologies Used

### Database
- MySQL

### Backend
- Node.js
- Express.js
- MySQL2
- CORS

### Frontend
- HTML
- CSS
- JavaScript

### Development Tools
- Visual Studio Code
- Git
- GitHub

---

## Database Schema

### Department
| Column | Type |
|----------|----------|
| departmentid | INT (PK) |
| departmentname | VARCHAR(100) |

### Doctor
| Column | Type |
|----------|----------|
| doctorid | INT (PK) |
| name | VARCHAR(100) |
| specialization | VARCHAR(100) |
| departmentid | INT (FK) |
| phone | VARCHAR(15) |

### Patient
| Column | Type |
|----------|----------|
| patientid | INT (PK) |
| name | VARCHAR(100) |
| age | INT |
| gender | VARCHAR(10) |
| phone | VARCHAR(15) |
| address | VARCHAR(200) |

### Appointment
| Column | Type |
|----------|----------|
| appointmentid | INT (PK) |
| patientid | INT (FK) |
| doctorid | INT (FK) |
| appointmentdate | DATE |
| status | VARCHAR(50) |

### Treatment
| Column | Type |
|----------|----------|
| treatmentid | INT (PK) |
| patientid | INT (FK) |
| doctorid | INT (FK) |
| description | VARCHAR(255) |
| treatmentdate | DATE |

### Bill
| Column | Type |
|----------|----------|
| billid | INT (PK) |
| patientid | INT (FK) |
| amount | DECIMAL(10,2) |
| billdate | DATE |
| payment_status | VARCHAR(20) |

---

## Entity Relationship Diagram

The ER Diagram represents the relationships among:

- Department → Doctor
- Doctor → Appointment
- Patient → Appointment
- Doctor → Treatment
- Patient → Treatment
- Patient → Bill

(Add ER Diagram image here)

```markdown
![ER Diagram](ER-Diagram.png)
```

---

## Project Structure

```text
hospital-management-system/

│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── db.js
│   └── package.json
│
├── schema.sql
├── ER-Diagram.png
├── Schema-Diagram.png
└── README.md
```

---

## Installation and Setup

### Step 1: Clone Repository

```bash
git clone <repository-url>
```

### Step 2: Navigate to Project

```bash
cd hospital-management-system
```

### Step 3: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 4: Configure Database

Create a MySQL database:

```sql
CREATE DATABASE hospital_management;
```

Import schema.sql into MySQL.

### Step 5: Configure Database Connection

Edit db.js:

```javascript
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "hospital_management"
});
```

### Step 6: Run Backend Server

```bash
node server.js
```

Server runs at:

```text
http://localhost:5000
```

### Step 7: Open Frontend

Open:

```text
frontend/index.html
```

in your browser.

---

## API Endpoints

### Get All Patients

```http
GET /patients
```

Response:

```json
[
  {
    "patientid": 1,
    "name": "Amit",
    "age": 25,
    "gender": "Male"
  }
]
```

---

## SQL Operations Demonstrated

### DDL Commands

- CREATE DATABASE
- CREATE TABLE
- ALTER TABLE

### DML Commands

- INSERT
- UPDATE
- DELETE

### DQL Commands

- SELECT
- JOIN
- Aggregate Functions

### Advanced Database Concepts

- Views
- Stored Procedures
- Triggers
- Foreign Keys
- Relationships

---

## Sample Queries

### Total Patients

```sql
SELECT COUNT(*) AS TotalPatients
FROM Patient;
```

### Total Revenue

```sql
SELECT SUM(amount) AS Revenue
FROM Bill;
```

### Appointment Details

```sql
SELECT
P.name AS Patient,
D.name AS Doctor,
A.appointmentdate
FROM Appointment A
JOIN Patient P
ON A.patientid=P.patientid
JOIN Doctor D
ON A.doctorid=D.doctorid;
```

---

## Future Enhancements

- User Authentication
- Admin Dashboard
- Online Appointment Booking
- Prescription Management
- Medical History Tracking
- Payment Gateway Integration
- Report Generation

---

## Learning Outcomes

This project demonstrates:

- Database Design
- ER Modeling
- SQL Queries
- Relational Database Management
- Backend Development
- Frontend Integration
- REST API Development
- Version Control using Git and GitHub

---

## Author

tasmiya anjum

DBMS Mini Project

Department of Computer Science

Academic Year 2025–2026

---

## License

This project is developed for educational purposes
