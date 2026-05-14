SELECT

    s.seller_id,

    s.seller_city,

    s.seller_state,

    ROUND(
        SUM(oi.price),
        2
    ) AS total_revenue,

    COUNT(DISTINCT oi.order_id) AS total_orders

FROM sellers s

INNER JOIN order_items oi
    ON s.seller_id = oi.seller_id

GROUP BY
    s.seller_id,
    s.seller_city,
    s.seller_state

ORDER BY total_revenue DESC

LIMIT 10;