// Description
// We want you to create a shopping list price displayer. You should be able to see in a list each item followed by its price!

// Instructions
// - Use these items and their respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, Salad at £2,00, Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
// - Store this information using the most appropriate data structures we've studied so far
// - Have a prompt to add an item to the list (you can have two prompts for the item and its price)
// - Output a list displaying each item and its price
// - Output the total at the end

// Tips
// - Pay attention to your data types, and what can you do with them

// Challenge
// We should be able to expand the list. As such, find a way to have two prompts, one for the item and another for the price, asking you repeatedly to add items to your list. The user should be able to stop adding items and then output the list to the user. We can use Google in our favour here if we know the right questions to ask

const shoppingList = ["Milk", "Ccoca", "Salad", "Carrots", "Tomatoes", "Ready meals"]
const shoppingListPrices = [1.20, 2.00, 2.00, 2.00, 2.50, 5.00]
let sum = 0;

let addNewItems = true

while (addNewItems) {

    addNewItems = confirm("Add new items to list?")

    if (addNewItems) {
        const newItemName = prompt("Whats the item name?")
        if (newItemName.length === 0) {

            alert("Please write something!!")
        } else {
            const newItemPrice = Number(prompt("How much does it cost?"))
            if (isNaN(newItemPrice)) {
                alert("Please refresh and write a Number!!")
            } else {
                shoppingList.push(newItemName)
                shoppingListPrices.push(newItemPrice)
            }
        }
    } else {
        for (let i = 0; i < shoppingList.length; i++) {
            sum = sum + shoppingListPrices[i]
            console.log(`${shoppingList[i]} costs £ ${shoppingListPrices[0].toFixed(2)}.`)
        }
        console.log(`Total costs of your shopping cart is £ ${sum.toFixed(2)}.`)
    }
}