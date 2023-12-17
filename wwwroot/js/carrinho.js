$(document).ready(function () {
    // Initialize an empty cart array
    var cart = [];

    // Listen for click events on "Adicionar ao Carrinho" buttons
    $(".add-to-cart").on("click", function (e) {
        e.preventDefault();

        // Get the cake information from the clicked button
        var itemName = $(this).data("name");
        var itemPrice = $(this).data("price");

        // Check if the item is already in the cart
        var existingItem = cart.find(item => item.name === itemName);

        if (existingItem) {
            // Increment the quantity if the item is already in the cart
            existingItem.quantity++;
        } else {
            // Add the item to the cart array with a quantity of 1
            cart.push({
                name: itemName,
                price: itemPrice,
                quantity: 1
            });
        }

        // Update the shopping cart display
        updateCartDisplay();

        // Event listener for remove buttons
        $("#cart-items").on("click", ".remove-from-cart", function () {
            var indexToRemove = $(this).data("index");
            cart.splice(indexToRemove, 1);
            updateCartDisplay();
        });
    });
    

    // Function to update the shopping cart display
    function updateCartDisplay() {
        var cartItemsContainer = $("#cart-items");
        var totalContainer = $("#total-price");
        var cartCounter = $("#cartCounter"); // Counter element
        
        cartItemsContainer.empty();
    
        cart.forEach(function (item, index) {
            cartItemsContainer.append(
                "<li>" +
                    item.name +
                    " (x" +
                    item.quantity +
                    ") - €" +
                    (item.price * item.quantity).toFixed(2) +
                    " <button class='btn btn-sm btn-danger remove-from-cart fa fa-trash' data-index='" +
                    index +
                    "'></button></li>"
            );
        });
    
        var totalPrice = calculateTotalPrice();
        totalContainer.text("Total: €" + totalPrice.toFixed(2));

        // Update the cart counter
        var totalQuantity = calculateTotalQuantity();
        cartCounter.text(totalQuantity);
    }

    // Function to calculate the total quantity of items in the cart
    function calculateTotalQuantity() {
        var totalQuantity = 0;
        cart.forEach(function (item) {
            totalQuantity += item.quantity;
        });
        return totalQuantity;
    }

    // Function to calculate the total price of items in the cart
    function calculateTotalPrice() {
        var totalPrice = 0;
        cart.forEach(function (item) {
            totalPrice += parseFloat(item.price) * item.quantity;
        });
        return totalPrice;
    }
});