SELECT

    payment_type,

    COUNT(*) AS total_transactions,

    ROUND(
        SUM(payment_value),
        2
    ) AS total_revenue,

    ROUND(
        AVG(payment_value),
        2
    ) AS average_payment

FROM payments

GROUP BY payment_type

ORDER BY total_revenue DESC;