// Knockout ViewModel
function UserProfileViewModel() {
    var self = this;

    // Observable properties for binding
    self.user = ko.observable({
        fullName: ko.observable(""),
        location: ko.observable(""),
        avatar: ko.observable("")
        // Add more user properties as needed
    });

    self.cardDataArray = ko.observableArray([]);

    // Observable property for card style
    self.cardStyle = ko.observable({
        boxShadow: '0px 0px 30px 0px rgba(255, 106, 0, 0.8)',
        border: '2px solid rgba(255, 106, 0, 0.5)'
    });

    // Observable array property for forum card data
    self.forumDataArray = ko.observableArray([
        {
            titleForum: "",
            bodyForum: "",
            views:"",
            replies: "",
            likes: "",
            timestamp: "",
        },
        // Add more forum card objects as needed
    ]);

    // Load profile data from JSON file using AJAX
    $.getJSON('js/dadosperfis.json', function (data) {
        // Assuming the JSON file contains an array of user objects
        if (data && data.length > 0) {
            var firstUser = data[0]; // Asssuming you want to use the first user in the JSON array
            self.user().fullName(firstUser.fullName);
            self.user().location(firstUser.location);
            self.user().avatar(firstUser.avatar);
        }
    });

    // Load cake data from JSON file using AJAX
    $.getJSON('js/dadosbolos.json', function (data) {
        // Assuming the JSON file contains an array of cake objects
        if (data && data.length > 0) {
            data.forEach(function (cake) {
                console.log('Processing cake:', cake);
            // Convert price and rating from strings to numbers
            var price = parseFloat(cake.price);
            var rating = parseInt(cake.rating);

                self.cardDataArray.push({
                    title: ko.observable(cake.title),
                    price: ko.observable(price),
                    rating: ko.observable(rating),
                    imageSrc: ko.observable(cake.imageSrc),
                    description: ko.observable(cake.description)
                });
            });
            console.log('Card data array:', userProfileViewModel.cardDataArray());
        }
    });
    
    // StarRating function
    self.starRating = function (rating) {
        console.log("Rating:", rating); // Log the rating
        var fullStars = Math.floor(rating / 2);
        var halfStar = rating % 2 === 1;

        var stars = [];
        for (var i = 0; i < fullStars; i++) {
            stars.push("fa fa-star checked");
        }

        if (halfStar) {
            stars.push("fa fa-star-half checked");
        }

        // Fill the remaining stars with unchecked stars
        for (var i = stars.length; i < 5; i++) {
            stars.push("fa fa-star");
        }

        return stars;
    };

}

// Apply Knockout bindings
var userProfileViewModel = new UserProfileViewModel();
ko.applyBindings(UserProfileViewModel);