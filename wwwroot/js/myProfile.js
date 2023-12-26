// Function to update the user information in local storage
function updateLocalStorage() {
    // Get values from Knockout observables
    var fullName = userProfileViewModel.user().fullName();
    var location = userProfileViewModel.user().location();
    var avatar = userProfileViewModel.user().avatar();

    // Update the view model
    userProfileViewModel.user().fullName(fullName);
    userProfileViewModel.user().location(location);
    userProfileViewModel.user().avatar(avatar);

    // Check if the values are not empty (useful when there are placeholders)
    if (fullName.trim() !== "") {
        localStorage.setItem("fullName", fullName);
    }

    if (location.trim() !== "") {
        localStorage.setItem("location", location);
    }

    if (avatar.trim() !== "") {
        localStorage.setItem("avatar", avatar);
    }
}

// Function to load user information from local storage
function loadFromLocalStorage() {
    var storedFullName = localStorage.getItem("fullName");
    var storedLocation = localStorage.getItem("location");
    var storedAvatar = localStorage.getItem("avatar");

    // Update the view model with the stored values if they exist
    if (storedFullName) {
        userProfileViewModel.user().fullName(storedFullName);
    }

    if (storedLocation) {
        userProfileViewModel.user().location(storedLocation);
    }

    if (storedAvatar) {
        userProfileViewModel.user().avatar(storedAvatar);
    }
}

function UserProfileViewModel() {
    var self = this;

    // Function to load user data from local storage
    self.loadUserDataFromLocalStorage = function () {
        var storedUserData = JSON.parse(localStorage.getItem('userProfileData'));

        if (storedUserData) {
            self.user().fullName(storedUserData.fullName);
            self.user().location(storedUserData.location);
            self.user().avatar(storedUserData.avatar);
        }
    };

    // Function to save user data to local storage
    self.saveUserDataToLocalStorage = function () {
        var userDataToSave = {
            fullName: self.user().fullName(),
            location: self.user().location(),
            avatar: self.user().avatar()
        };

        localStorage.setItem('userProfileData', JSON.stringify(userDataToSave));
    };

    // Observable properties for binding
    self.user = ko.observable({
        fullName: ko.observable("Utilizador"),
        location: ko.observable("UA, Aveiro, Portugal"),
        avatar: ko.observable("https://bootdey.com/img/Content/avatar/avatar1.png")
    });

    // Observable properties for editing state
    self.isEditingUsername = ko.observable(false);
    self.isEditingLocation = ko.observable(false);

    // Function to show/hide the edit input for username
    self.showEditUsername = function () {
        self.isEditingUsername(!self.isEditingUsername());
    };

    // Function to show/hide the edit input for location
    self.showEditLocation = function () {
        self.isEditingLocation(!self.isEditingLocation());
    };

    // Load user data from local storage when the view model is created
    self.loadUserDataFromLocalStorage();

    // Subscribe to changes in user data to automatically save to local storage
    self.user.subscribe(function () {
        self.saveUserDataToLocalStorage();
    });
}

// Apply Knockout bindings
$(document).ready(function () {
    var userProfileViewModel = new UserProfileViewModel();
    ko.applyBindings(userProfileViewModel);
    // Load user data from local storage when the page loads
    userProfileViewModel.loadUserDataFromLocalStorage();
});
