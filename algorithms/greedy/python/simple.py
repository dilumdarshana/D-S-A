# buy and sell stock

# you are given an array prices where prices[i] is 
# the price of a given stock on the ith day.

# You want to maximize your profit by choosing a single day 
# to buy one stock and choosing a different day in the future to sell that stock.

# Return the maximum profit you can achieve from this transaction. 
# If you cannot achieve any profit, return 0.

# where we apply greedy
# - Always make the choice that looks best at the moment
# - Never consider privous choices

def maxProfit(prices):
  max_profit = 0
  min_price = float('inf')

  for price in prices:
    min_price = min(min_price, price)

    max_profit = max(max_profit, price - min_price)

  return max_profit


print(maxProfit([7,6,4,3,1])) # [7,1,5,3,6,4]
