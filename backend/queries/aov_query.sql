SELECT

    ROUND(

        SUM(p.payment_value)
        /
        COUNT(DISTINCT o.order_id),

        2

    ) AS average_order_value

FROM orders o

INNER JOIN payments p
    ON o.order_id = p.order_id;