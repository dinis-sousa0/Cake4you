$(document).ready(function () {
    // Initialize an empty cart array
    var cart = [];

    // Delegate click events on "Adicionar ao Carrinho" buttons
    $(".d-flex.justify-content-center.flex-wrap").on("click", ".add-to-cart", function (e) {
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
    });

    // Delegate click events for remove buttons
    $("#cart-items").on("click", ".remove-from-cart", function () {
        var indexToRemove = $(this).data("index");
        cart.splice(indexToRemove, 1);
        updateCartDisplay();
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

function submitForm() {
    // Get form values
    var threadName = document.getElementById("threadName").value;
    var threadPrice = document.getElementById("threadPrice").value;
    var threadDescription = document.getElementById("threadDescription").value;
    var threadImage = document.getElementById("image").value;

    // Create a new post element
    var newPost = document.createElement("div");
    newPost.className = "card mr-5 mb-5 cake-card";
    newPost.innerHTML = `
             <img class="card-img-top" src="${threadImage}" alt="Imagem do Bolo">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${threadName}</h5>
                    <h6 class="card-title">Preço: ${threadPrice}€</h6 >
                    <p>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </p>
                    <p class="card-text">${threadDescription}</p >
                    <div class="row mt-auto" style="align-items:center; padding-bottom:10px;padding-left:10px">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle" width="50" alt="User" />
                        <h6 style="text-align: right;margin-left:10px; margin-right:20px"><a style="color:#0c0c0c" href="perfil.html">Tu</a></h6>
                    </div> 
                </div>
           `;

    // Append the new post to the container
    var container = document.getElementById("forumPosts");
    var firstChild = container.firstChild;

    container.insertBefore(newPost, firstChild);

    // Optional: Clear the form fields
    document.getElementById("threadName").value = '',
    document.getElementById("threadPrice").value = '',
        document.getElementById("threadDescription").value = '';
    document.getElementById("image").value = '';
}