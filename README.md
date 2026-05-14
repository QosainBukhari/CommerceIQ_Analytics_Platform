```md
# CommerceIQ Analytics Platform

CommerceIQ is a full-stack e-commerce analytics platform built using MySQL, FastAPI, React, Tailwind CSS, and Recharts.

The platform loads raw e-commerce data into a relational database, performs advanced SQL analytics, exposes analytics APIs through FastAPI, and visualizes business insights in an interactive React dashboard.

This project demonstrates a complete end-to-end analytics engineering workflow used in real-world business intelligence systems.

---

# Project Overview

CommerceIQ transforms raw Brazilian e-commerce transaction data into actionable business insights.

The system includes:

- ETL pipeline using Pandas
- Relational database design in MySQL
- Advanced SQL analytics
- FastAPI backend APIs
- React analytics dashboard
- Interactive charts and KPI visualizations

---

# System Architecture

```text
CSV Dataset
     ↓
Pandas ETL Pipeline
     ↓
MySQL Relational Database
     ↓
SQL Analytics Queries
     ↓
FastAPI Backend APIs
     ↓
Axios API Requests
     ↓
React Frontend Dashboard
     ↓
Charts, KPIs & Business Insights
```

---
<p align="center">
  <img src="docs/screenshots/dashboard.png" alt="CommerceIQ Dashboard" width="100%">
</p>
# Dataset

Dataset Used:
Brazilian E-Commerce Public Dataset by Olist

Source:
https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce

The dataset contains:

- Customers
- Orders
- Products
- Sellers
- Payments
- Reviews
- Order Items

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
- React Router

## Deployment / DevOps

- Docker
- GitHub

---

# Features

## Backend Features

### ETL Pipeline

- CSV ingestion using Pandas
- Schema filtering
- Data loading into MySQL
- Reusable ETL functions

### SQL Analytics

- Revenue analytics
- Product analytics
- Order analytics
- Seller analytics
- Geography analytics
- Payment analytics
- KPI calculations
- Time-series analytics
- Window functions
- Aggregations
- Multi-table joins

### FastAPI Backend

- REST API architecture
- Modular routing
- SQL query separation
- JSON analytics responses
- CORS support

---

## Frontend Features

### Analytics Dashboard

- KPI cards
- Revenue charts
- Interactive tables
- Responsive layout
- Loading states

### Analytics Pages

- Dashboard
- Products Analytics
- Categories Analytics
- Orders Analytics
- Payments Analytics
- Sellers Analytics
- Geography Analytics

### UI Features

- Tailwind CSS styling
- Recharts visualizations
- React Router navigation
- Responsive dashboard UI

---

# Database Schema

Main relational tables:

```text
customers
orders
order_items
products
sellers
payments
reviews
```

---

# Relationships

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

## KPI APIs

| Endpoint | Description |
|---|---|
| `/kpis` | Overall business KPIs |
| `/average-order-value` | Average order value |

---

## Revenue Analytics

| Endpoint | Description |
|---|---|
| `/monthly-revenue` | Monthly revenue trends |
| `/monthly-growth` | Revenue growth analysis |

---

## Product Analytics

| Endpoint | Description |
|---|---|
| `/top-products` | Top performing products |
| `/top-categories` | Top product categories |

---

## Order Analytics

| Endpoint | Description |
|---|---|
| `/daily-orders` | Daily order trends |
| `/order-status` | Order status distribution |

---

## Payment Analytics

| Endpoint | Description |
|---|---|
| `/payment-analysis` | Payment method analysis |

---

## Seller Analytics

| Endpoint | Description |
|---|---|
| `/top-sellers` | Top marketplace sellers |

---

## Geography Analytics

| Endpoint | Description |
|---|---|
| `/top-states` | Customer distribution by state |

---

# Frontend Dashboard Pages

## Dashboard

Displays:
- Revenue KPIs
- Revenue trends
- Revenue table

## Products Analytics

Displays:
- Top products
- Product revenue charts

## Categories Analytics

Displays:
- Category revenue analysis

## Orders Analytics

Displays:
- Daily order trends
- Operational analytics

## Payments Analytics

Displays:
- Payment type distribution

## Sellers Analytics

Displays:
- Seller performance metrics

## Geography Analytics

Displays:
- Customer state distribution

---

# Project Structure

```text
commerceiq-analytics-platform/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── database/
│   │   ├── services/
│   │   ├── schemas/
│   │   └── main.py
│   │
│   ├── queries/
│   ├── requirements.txt
│   └── data_loader.py
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── charts/
│   │
│   └── package.json
│
├── data/
├── docs/
├── .env
├── .gitignore
├── docker-compose.yml
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/QosainBukhari/CommerceIQ_Analytics_Platform.git
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

### Linux / Mac

```bash
source commerceiq-venv/bin/activate
```

## Install dependencies

```bash
pip install -r requirements.txt
```

## Run backend server

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

## Start frontend

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
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

# Example API Endpoints

```text
http://127.0.0.1:8000/kpis
http://127.0.0.1:8000/monthly-revenue?year=2018
http://127.0.0.1:8000/top-products
http://127.0.0.1:8000/payment-analysis
```

---

# Dashboard Screenshots

Add screenshots inside:

```text
docs/screenshots/
```

Example:

```md
![Dashboard](docs/screenshots/dashboard.png)
```

---

# Future Improvements

- Docker deployment
- Cloud deployment
- Authentication system
- Query optimization
- Redis caching
- Advanced BI dashboards
- Forecasting analytics
- Machine learning integration

---

# Learning Outcomes

This project demonstrates understanding of:

- Relational database design
- ETL pipelines
- SQL analytics
- FastAPI backend engineering
- React frontend dashboards
- API integration
- Business intelligence systems
- Full-stack analytics architecture

---

# Author

Qosain Bukhari

---

# License

This project is built for educational and portfolio purposes.
```