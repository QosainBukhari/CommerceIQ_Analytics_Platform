import os

import pandas as pd

from sqlalchemy import create_engine

from dotenv import load_dotenv


# Load environment variables
load_dotenv()


# Database configuration
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")
DB_NAME = os.getenv("DB_NAME")


# Database URL
DATABASE_URL = (
    f"mysql+pymysql://"
    f"{DB_USER}:{DB_PASSWORD}"
    f"@{DB_HOST}:{DB_PORT}/{DB_NAME}"
)


# SQLAlchemy engine
engine = create_engine(DATABASE_URL)


# Reusable loader function
def load_table(csv_path, table_name, columns):

    print(f"\nLoading {table_name}...")

    df = pd.read_csv(csv_path)

    df = df[columns]

    df.to_sql(
        name=table_name,
        con=engine,
        if_exists="append",
        index=False
    )

    print(f"{table_name} loaded successfully")


# ==========================================
# CUSTOMERS
# ==========================================

load_table(

    csv_path="data/raw/olist_customers_dataset.csv",

    table_name="customers",

    columns=[
        "customer_id",
        "customer_unique_id",
        "customer_city",
        "customer_state"
    ]
)


# ==========================================
# PRODUCTS
# ==========================================

load_table(

    csv_path="data/raw/olist_products_dataset.csv",

    table_name="products",

    columns=[
        "product_id",
        "product_category_name"
    ]
)


# ==========================================
# SELLERS
# ==========================================

load_table(

    csv_path="data/raw/olist_sellers_dataset.csv",

    table_name="sellers",

    columns=[
        "seller_id",
        "seller_city",
        "seller_state"
    ]
)


# ==========================================
# ORDERS
# ==========================================

load_table(

    csv_path="data/raw/olist_orders_dataset.csv",

    table_name="orders",

    columns=[
        "order_id",
        "customer_id",
        "order_status",
        "order_purchase_timestamp",
        "order_delivered_customer_date"
    ]
)


# ==========================================
# PAYMENTS
# ==========================================

load_table(

    csv_path="data/raw/olist_order_payments_dataset.csv",

    table_name="payments",

    columns=[
        "order_id",
        "payment_type",
        "payment_value"
    ]
)


# ==========================================
# REVIEWS
# ==========================================

load_table(

    csv_path="data/raw/olist_order_reviews_dataset.csv",

    table_name="reviews",

    columns=[
        "review_id",
        "order_id",
        "review_score"
    ]
)


# ==========================================
# ORDER ITEMS
# ==========================================

load_table(

    csv_path="data/raw/olist_order_items_dataset.csv",

    table_name="order_items",

    columns=[
        "order_id",
        "product_id",
        "seller_id",
        "price",
        "freight_value"
    ]
)


print("\nAll tables loaded successfully")