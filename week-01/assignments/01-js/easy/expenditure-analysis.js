/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
    let record = {}
    for (let i = 0; i < transactions.length; i++) {
        const transaction = transactions[i]
        if (transaction['category'] in record) {
            record[transaction['category']] += transaction['price']
        } else {
            record[transaction['category']] = transaction['price']
        }
    }

    let result = []
    for (const [category, price] of Object.entries(record)) {
        result.push({ category, totalSpent: price })
    }

    return result
}

module.exports = calculateTotalSpentByCategory
