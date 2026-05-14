-- Top States by Customers

select 
customer_state,
count(*) as num_customers

from customers
group by customer_state
order by num_customers desc
limit 10;