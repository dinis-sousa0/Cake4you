document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (event) {
        // Perform form validation here
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});

function validateForm() {
    // Get form input values
    var fname = document.getElementById('fname').value.trim()
    console.log("Name entered:", fname);  // Log the name for debugging
    var email = document.getElementById('email').value.trim();
    var adr = document.getElementById('adr').value.trim();
    var city = document.getElementById('city').value.trim();
    var distrito = document.getElementById('distrito').value.trim();
    var zip = document.getElementById('zip').value.trim();
    var cname = document.getElementById('cname').value.trim();
    var ccnum = document.getElementById('ccnum').value.trim();
    var expmonth = document.getElementById('expmonth').value.trim();
    var cvv = document.getElementById('cvv').value.trim();

    // Perform validation
    if (fname === '' || email === '' || adr === '' || city === '' || distrito === '' || zip === '' ||
        cname === '' || ccnum === '' || expmonth === '' || cvv === '') {
        alert('Complete TODOS os campos');
        return false;
    }

    // Add more specific validation as needed (e.g., email format, card number format, etc.)
    return true; // Form is valid
}