```md
# CommerceIQ Analytics Platform

CommerceIQ is a full-stack e-commerce analytics platform built using MySQL, FastAPI, React, Tailwind CSS, and Recharts.

The project loads raw Brazilian e-commerce data into MySQL, performs advanced SQL analytics, exposes analytics APIs through FastAPI, and visualizes business insights in a modern React dashboard.

---

# Project Architecture

```text
CSV Data
   ↓
Pandas ETL Pipeline
   ↓
MySQL Database
   ↓
SQL Analytics Queries
   ↓
FastAPI Backend APIs
   ↓
React Frontend Dashboard
```

---

# Features

## Backend Features

- MySQL relational database
- ETL pipeline using Pandas
- SQL analytics queries
- FastAPI REST APIs
- Modular backend architecture
- KPI analytics
- Revenue analytics
- Product analytics
- Order analytics
- Payment analytics
- Seller analytics
- Geography analytics

## Frontend Features

- React dashboard
- Tailwind CSS styling
- Responsive analytics UI
- Recharts visualizations
- KPI cards
- Revenue charts
- Data tables
- Multi-page dashboard
- Routing with React Router
- Loading states

---

# Tech Stack

## Backend

- Python
- FastAPI
- SQLAlchemy
- Pandas
- PyMySQL
- MySQL

## Frontend

- React
- Tailwind CSS
- Axios
- Recharts

## Deployment

- Docker
- GitHub

---

# Database Schema

Main tables used:

- customers
- orders
- order_items
- products
- sellers
- payments
- reviews

Relationships:

```text
customers
   ↓
orders
   ↓
payments

orders
   ↓
order_items
   ↓
products

order_items
   ↓
sellers
```

---

# Analytics APIs

| Endpoint | Description |
|---|---|
| `/kpis` | Business KPIs |
| `/monthly-revenue` | Monthly revenue trends |
| `/monthly-growth` | Revenue growth analysis |
| `/average-order-value` | AOV analytics |
| `/top-products` | Top products |
| `/top-categories` | Product category analytics |
| `/daily-orders` | Daily order trends |
| `/order-status` | Order status analytics |
| `/payment-analysis` | Payment type analytics |
| `/top-sellers` | Seller performance |
| `/top-states` | Geography analytics |

---

# Frontend Pages

- Dashboard
- Products Analytics
- Categories Analytics
- Orders Analytics
- Payments Analytics
- Sellers Analytics
- Geography Analytics

---

# Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/commerceiq-analytics-platform.git
```

---

# Backend Setup

## Navigate to backend

```bash
cd backend
```

## Create virtual environment

```bash
python -m venv commerceiq-venv
```

## Activate virtual environment

### Windows

```bash
commerceiq-venv\Scripts\activate
```

### Mac/Linux

```bash
source commerceiq-venv/bin/activate
```

## Install dependencies

```bash
pip install -r requirements.txt
```

## Run backend

```bash
uvicorn app.main:app --reload
```

Backend runs at:

```text
http://127.0.0.1:8000
```

---

# Frontend Setup

## Navigate to frontend

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Run frontend

```bash
npm start
```

Frontend runs at:

```text
http://localhost:3000
```

---

# Environment Variables

Create `.env` file in project root:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=commerceiq_db
```

---

# Dataset

Dataset used:

Brazilian E-Commerce Public Dataset by Olist

Source:
https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce

---

# Future Improvements

- Docker deployment
- Authentication
- Query optimization
- Redis caching
- Advanced BI dashboards
- Machine learning forecasting
- Cloud deployment

---

# Screenshots

Add dashboard screenshots here after deployment.

Example:

```md
![Dashboard Screenshot](docs/dashboard.png)
```

---

# Author

Qosain

---

# License

This project is for educational and portfolio purposes.
```