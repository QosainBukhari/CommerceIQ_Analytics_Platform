SELECT

    DATE(order_purchase_timestamp) AS order_date,

    COUNT(order_id) AS total_orders

FROM orders

GROUP BY order_date

ORDER BY order_date;