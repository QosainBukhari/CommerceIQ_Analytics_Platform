SELECT

    p.product_id,

    p.product_category_name,

    ROUND(
        SUM(oi.price),
        2
    ) AS total_revenue,

    COUNT(oi.order_id) AS total_orders

FROM products p

INNER JOIN order_items oi
    ON p.product_id = oi.product_id

GROUP BY
    p.product_id,
    p.product_category_name

ORDER BY total_revenue DESC

LIMIT 10;