from fastapi import APIRouter
from sqlalchemy import text
import pandas as pd

from app.database.connection import engine

router = APIRouter()


# Load SQL query from .sql file
def load_query(file_path):

    with open(file_path, "r") as file:
        query = file.read()

    return query


# Monthly Revenue Endpoint
@router.get("/monthly-revenue")
def monthly_revenue(year: int):

    query = load_query(
        "queries/revenue_queries.sql"
    )

    query = query.replace(
        "{year}",
        str(year)
    )

    df = pd.read_sql(
        text(query),
        engine
    )

    return df.to_dict(orient="records")


# KPI Endpoint
@router.get("/kpis")
def get_kpis():

    query = load_query(
        "queries/kpi_queries.sql"
    )

    df = pd.read_sql(
        text(query),
        engine
    )

    return df.to_dict(
        orient="records"
    )[0]


# Top Categories Endpoint
@router.get("/top-categories")
def top_categories():

    query = load_query(
        "queries/product_queries.sql"
    )

    df = pd.read_sql(
        text(query),
        engine
    )

    return df.to_dict(
        orient="records"
    )


# Top States Endpoint
@router.get("/top-states")
def top_states():

    query = load_query(
        "queries/top_states.sql"
    )

    df = pd.read_sql(
        text(query),
        engine
    )

    return df.to_dict(
        orient="records"
    )


# Top Customers Endpoint
@router.get("/top-customers")
def top_customers():

    query = load_query(
        "queries/top_customers.sql"
    )

    df = pd.read_sql(
        text(query),
        engine
    )

    return df.to_dict(
        orient="records"
    )


# Monthly Growth Endpoint
@router.get("/monthly-growth")
def monthly_growth():

    query = load_query(
        "queries/monthly_growth.sql"
    )

    df = pd.read_sql(
        text(query),
        engine
    )

    return df.to_dict(
        orient="records"
    )


# Average Order Value Endpoint
@router.get("/average-order-value")
def average_order_value():

    query = load_query(
        "queries/aov_query.sql"
    )

    df = pd.read_sql(
        text(query),
        engine
    )

    return df.to_dict(
        orient="records"
    )[0]


# Payment Analysis Endpoint
@router.get("/payment-analysis")
def payment_analysis():

    query = load_query(
        "queries/payment_type_analysis.sql"
    )

    df = pd.read_sql(
        text(query),
        engine
    )

    return df.to_dict(
        orient="records"
    )


# Top Sellers Endpoint
@router.get("/top-sellers")
def top_sellers():

    query = load_query(
        "queries/top_sellers.sql"
    )

    df = pd.read_sql(
        text(query),
        engine
    )

    return df.to_dict(
        orient="records"
    )


# Daily Orders Endpoint
@router.get("/daily-orders")
def daily_orders():

    query = load_query(
        "queries/daily_orders.sql"
    )

    df = pd.read_sql(
        text(query),
        engine
    )

    return df.to_dict(
        orient="records"
    )


# Top Products Endpoint
@router.get("/top-products")
def top_products():

    query = load_query(
        "queries/top_products.sql"
    )

    df = pd.read_sql(
        text(query),
        engine
    )

    return df.to_dict(
        orient="records"
    )


# Order Status Endpoint
@router.get("/order-status")
def order_status():

    query = load_query(
        "queries/order_status.sql"
    )

    df = pd.read_sql(
        text(query),
        engine
    )

    return df.to_dict(
        orient="records"
    )