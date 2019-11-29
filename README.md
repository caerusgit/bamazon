Amazon-like storefront with MySQL.

The app will take in orders from customers and deplete stock from the store's inventory.

The application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

The app will then prompt users with two messages.

   * The first will ask the ID of the product they would like to buy.
   * The second message will ask how many units of the product they would like to buy.

Once the customer has placed the order, the application will check if your store has enough of the product to meet the customer's request.

   * If not, the app will log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

However, if your store _does_ have enough of the product, it will fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, it'll show the customer the total cost of their purchase.




Video: https://github.com/caerusgit/bamazon/blob/master/bamazon.mov