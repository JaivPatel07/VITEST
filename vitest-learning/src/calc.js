function calculateTotal(price, taxFunction) {
  const tax = taxFunction(price) // The taxFunction is called with the price to calculate the tax
  return price + tax
}

module.exports = { calculateTotal }