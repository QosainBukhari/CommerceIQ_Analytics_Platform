SELECT

    order_status,

    COUNT(order_id) AS total_orders

FROM orders

GROUP BY order_status

ORDER BY total_orders DESC;