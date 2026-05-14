SELECT

    DATE_FORMAT(
        o.order_purchase_timestamp,
        '%Y-%m'
    ) AS `year_month`,

    SUM(p.payment_value) AS total_revenue

FROM orders o

INNER JOIN payments p
ON o.order_id = p.order_id

WHERE YEAR(
    o.order_purchase_timestamp
) = {year}

GROUP BY `year_month`

ORDER BY `year_month`;