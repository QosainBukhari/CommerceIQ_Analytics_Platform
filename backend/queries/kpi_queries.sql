SELECT

    (
        SELECT SUM(payment_value)
        FROM payments
    ) AS total_revenue,

    (
        SELECT COUNT(order_id)
        FROM orders
    ) AS total_orders,

    (
        SELECT COUNT(customer_id)
        FROM customers
    ) AS total_customers;