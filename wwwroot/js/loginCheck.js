// Check if the user is logged in (retrieve from localStorage)
function isUserLoggedIn() {
    return localStorage.getItem('userLoggedIn') === 'true';
}

// Update the navigation bar based on login state
function updateNavbar() {
    if (isUserLoggedIn()) {
        $('#profileLink').text('Perfil').attr('href', 'perfil.html');
    } else {
        $('#profileLink').text('Log In').attr('href', 'login.html');
    }
}

// Handle login button click event
$('#loginButton').on('click', function () {
    // Your login logic goes here

    // For demonstration purposes, let's assume login is successful
    localStorage.setItem('userLoggedIn', 'true');

    // Update the navigation bar
    updateNavbar();
});


// Initial update of the navigation bar
updateNavbar();