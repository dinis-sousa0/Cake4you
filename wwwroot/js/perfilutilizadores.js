    // Knockout ViewModel
    function UserProfileViewModel() {
        var self = this;
    
        // Observable properties for binding
        self.user = ko.observable({
            fullName: "Moussa Marega",
            location: "R. José Fernandes Guerreiro 56, Faro, Portugal",
            // Adicione mais propriedades do usuário conforme necessário
        });
    
        // Observable property for card data
        self.cardData = ko.observable({
            title: "Bolo de Cenoura com Chocolate",
            price: "37.20",
            imageSrc: "images/cenoura-chocolate.webp",
            description: "O bolo de cenoura com chocolate é um carinho em cada pedaço. Massa úmida, sabor de cenoura e chocolate, e a cobertura deliciosa.",
            // Adicione mais propriedades do card conforme necessário
        });
    }
    
    // Aplicar ligações do Knockout
    var userProfileViewModel = new UserProfileViewModel();
    ko.applyBindings(userProfileViewModel);