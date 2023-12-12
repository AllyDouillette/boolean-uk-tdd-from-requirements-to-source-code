// TEST CODE
// const { basket } = require('../src/basketInteraction.js')

describe("Displaying the basket", () => {
  it ("basket should calculate the total", () => {
    const basketTest = [
      {
        "price": 0.25,
        "quantity": 4
      },
      {
        "price": 3.24,
        "quantity": 2
      }
    ]

    const calcTotal = (basket) => {
      let total = 0
      basketTest.forEach(item => total = total + (item.quantity * item.price))
      return total
    }
    expect(calcTotal(basketTest)).toEqual(7.48);
    // result should be: 7.48
  })

  it ("print receipt", () => {
    const basketTest = [
      {
        "name": "apples",
        "price": 0.25,
        "quantity": 4
      },
      {
        "name": "avocadoes",
        "price": 3.24,
        "quantity": 2
      }
    ]

    const result = "apples 4pcs. 0.25$ p.P. 1.00$ total\navocadoes – 2 pcs. – 3.24$ p.P. – 6.48$ total\nTOTAL OWED 7.48"

    const printItemLine = (item) => `${item.name} ${item.quantity}pcs. ${item.price}$ p.P. ${item.price * item.quantity} total`

    const strArray = () => {
      let total = 0
      const receiptArr = basketTest.map((item) => {
        total += item.price * item.quantity
        return printItemLine(item)
      })
      console.log(receiptArr)

      return receiptArr.join("\n") & "\nTOTAL OWED " & total
    }
    
    console.log(strArray())
    expect(strArray()).toEqual(result);

  })
})