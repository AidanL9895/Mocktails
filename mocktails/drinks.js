
const drinks = [
    {
      name: "Cranberry Sparkler",
      ingredients: "Cranberry juice, sparkling water, lime",
      recipe: "Mix cranberry juice and sparkling water 1:1, add lime wedge.",
      calories: "50 calories",
      image: "cranberry_sparkler.jpg",
    },
    {
      name: "Peppermint Hot Chocolate",
      ingredients: "Cocoa, peppermint extract, milk, whipped cream",
      recipe: "Heat milk with cocoa & peppermint, top with cream.",
      calories: "250 calories",
      image: "peppermint_hot_chocolate.jpg",
    },
    {
      name: "Spiced Apple Cider",
      ingredients: "Apple cider, cinnamon, cloves, orange slice",
      recipe: "Heat cider with spices, garnish with orange slice.",
      calories: "120 calories",
      image: "spiced_apple_cider.jpg",
    },
    {
      name: "Gingerbread Mocktail",
      ingredients: "Ginger beer, vanilla, molasses, soda water",
      recipe: "Stir ingredients over ice, top with soda water.",
      calories: "90 calories",
      image: "gingerbread_mocktail.jpg",
    },
    {
      name: "Mistletoe Mule",
      ingredients: "Vodka, cranberry juice, ginger beer, mint",
      recipe: "Mix vodka & cranberry, top with ginger beer, mint.",
      calories: "180 calories",
      image: "mistletoe_mule.jpg",
    },
  ];
  
  const setupDrinks = () => {
    const wrapper = $(".wrapper");
  
    drinks.forEach((drink, index) => {
      const cardHTML = `
        <div class="card" data-index="${index}">
          <h3>${drink.name}</h3>
          <img class="drink-image" src="./images/${drink.image}" alt="${drink.name}" />
          <p class="drink-info">${drink.ingredients}</p>
        </div>`;
      wrapper.append(cardHTML);
    });
  
    $(".card").on("mouseover", function () {
      const index = $(this).data("index");
      $(this).find(".drink-info").text(drinks[index].recipe);
    });
  
    $(".card").on("click", function () {
      const index = $(this).data("index");
      $(this).find(".drink-info").text(drinks[index].calories);
    });
  
    $(".card").on("mouseout", function () {
      const index = $(this).data("index");
      $(this).find(".drink-info").text(drinks[index].ingredients);
    });
  };
  
  $(document).ready(setupDrinks);
  