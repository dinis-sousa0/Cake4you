$(document).ready(function () {
    // Initial sorting based on "Recomendado" (you can set a default)
    sortCards("Recomendado");

    // Event handler for changing the sorting criteria
    $(".custom-select").change(function () {
      var selectedValue = $(this).val();
      sortCards(selectedValue);
    });

    function sortCards(criteria) {
      var $cardsContainer = $(".d-flex.justify-content-center.flex-wrap");
      var $cards = $(".cake-card");

      $cards.sort(function (a, b) {
        var aValue, bValue;

        switch (criteria) {
          case "Preço Ascendente":
            aValue = parseFloat($(a).data("price-min"));
            bValue = parseFloat($(b).data("price-min"));
            break;
          case "Preço Descendente":
            aValue = parseFloat($(b).data("price-max"));
            bValue = parseFloat($(a).data("price-max"));
            break;
          case "Rating":
            aValue = parseInt($(b).data("rating"));
            bValue = parseInt($(a).data("rating"));
            break;
          default:
            aValue = bValue = 0;
            break;
        }

        return aValue - bValue;
      });

      $cardsContainer.html($cards);
    }
  });