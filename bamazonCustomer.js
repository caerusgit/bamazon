var mysql = require("mysql");
var inquirer = require("inquirer");
var products = [];


// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "12345678",
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    displayItemsAvailableForSale();
});




function displayItemsAvailableForSale() {
    var query = "SELECT * FROM products ";
    connection.query(query, function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            products.push(res[i].item_id);
            console.log(
                "item_id: " +
                res[i].item_id +
                " || product_name: " +
                res[i].product_name +
                " || department_name: " +
                res[i].department_name +
                " || price: " +
                res[i].price +
                " || stock_quantity: " +
                res[i].stock_quantity
            );
        }
        // console.log("Products Array: ", products)
        productSelection();
    });
}





// function to handle the selection of a prodruct
function productSelection() {
    // prompt for ID of the product they would like to buy
    inquirer
        .prompt([
            {
                name: "choice",
                type: "input",
                message: "ID of the product you would like to buy"
            },
            {
                name: "quantity",
                type: "input",
                message: "how many units of the product you would like to buy?"
            }
        ])
        .then(function (answer) {


            var query = `SELECT stock_quantity, price FROM products WHERE item_id = '${answer.choice}'`;
            connection.query(query, function (err, res) {
                if (err) throw err;
                // console.log(res);


                if (parseInt(answer.quantity) <= res[0].stock_quantity) {
                    // Items are available
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: res[0].stock_quantity - answer.quantity
                            },
                            {
                                item_id: answer.choice
                            }
                        ],
                        function (error) {
                            if (error) throw err;
                            console.log("Sell placed successfully!");
                        }
                    );
                    console.log("Total: " + answer.quantity*res[0].price);
                } else {
                    // Insufficient quantity!
                    console.log("Insufficient quantity!");
                }






            });








        });



}