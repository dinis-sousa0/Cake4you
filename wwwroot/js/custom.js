// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// função do modal do yc4y
function showYourCake4YouModal() {
    $('#yourCake4YouModal').modal('show');
}


// função para carregar outros perfis
function goToProfile(index) {
    // Store the index in the URL as a parameter
    window.location.href = "perfilmarega.html?index=" + index;
}

// função para carrregar perfil próprio
function goToMyProfile(index) {
    // Store the index in the session storage
    localStorage.setItem('index', index);
    window.location.href = "perfil.html";
}
