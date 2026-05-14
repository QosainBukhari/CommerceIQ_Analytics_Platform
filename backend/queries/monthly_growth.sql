WITH monthly_revenue AS (

    SELECT
        DATE_FORMAT(
            o.order_purchase_timestamp,
            '%Y-%m'
        ) AS `year_month`,

        SUM(p.payment_value) AS revenue

    FROM orders o

    INNER JOIN payments p
        ON o.order_id = p.order_id

    GROUP BY `year_month`
),

growth_data AS (

    SELECT
        `year_month`,

        revenue,

        LAG(revenue) OVER (
            ORDER BY `year_month`
        ) AS previous_month_revenue

    FROM monthly_revenue
)

SELECT
    `year_month`,

    revenue,

    previous_month_revenue,

    ROUND(

        (
            (
                revenue -
                previous_month_revenue
            )

            /

            previous_month_revenue

        ) * 100,

        2

    ) AS growth_percentage

FROM growth_data

WHERE previous_month_revenue IS NOT NULL
AND previous_month_revenue > 1000;