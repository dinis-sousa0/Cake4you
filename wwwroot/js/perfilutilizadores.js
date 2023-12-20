// Knockout ViewModel
function UserProfileViewModel() {
    var self = this;

    // Observable properties for binding
    self.user = ko.observable({
        fullName: "Moussa Marega",
        location: "R. José Fernandes Guerreiro 56, Faro, Portugal",
        avatar: "https://img.a.transfermarkt.technology/portrait/big/283130-1681408284.jpg?lm=1"
        // Add more user properties as needed
    });

    // Observable array property for card data
    self.cardDataArray = ko.observableArray([
        {
            title: "Bolo de Cenoura com Chocolate",
            price: "37.20",
            rating: 6,
            imageSrc: "images/cenoura-chocolate.webp",
            description: "O bolo de cenoura com chocolate é um carinho em cada pedaço. Massa úmida, sabor de cenoura e chocolate, e a cobertura deliciosa.",
        },
        
        
        // Add more card objects as needed
    ]);

    // Observable property for card style
    self.cardStyle = ko.observable({
        boxShadow: '0px 0px 30px 0px rgba(255, 106, 0, 0.8)',
        border: '2px solid rgba(255, 106, 0, 0.5)'
    });

    // Computed property for star display
    self.starRating = function (rating) {
        var fullStars = Math.floor(rating / 2);
        var halfStar = rating % 2 === 1;

        var stars = [];
        for (var i = 0; i < fullStars; i++) {
            stars.push("fa-star checked");
        }

        if (halfStar) {
            stars.push("fa-star-half checked");
        }

        return stars;
    };

    // Observable array property for forum card data
    self.forumDataArray = ko.observableArray([
        {
            titleForum: "Dicas para fazer um bolo perfeito",
            bodyForum: "Certifique-se de usar ingredientes frescos e de alta qualidade. Isso inclui farinha, ovos, fermento, açúcar e qualquer outro ingrediente que você esteja usando.",
            views: 120,
            replies: 15,
            likes: 8,
            timestamp: "",
        },
        // Add more forum card objects as needed
    ]);

}

// Apply Knockout bindings
var userProfileViewModel = new UserProfileViewModel();
ko.applyBindings(UserProfileViewModel);