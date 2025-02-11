export const myQuery = `
select
  date_trunc('week', block_timestamp::timestamp)::date as day_date,
  sum(gas_price * gas_used) / pow(10, 9) as weekly_tx_fees_collected,
  avg(gas_price * gas_used) as avg_tx_fees_collected_per_tx_in_gwei
from
  optimism.core.fact_transactions
group by
  1
order by
  1
`