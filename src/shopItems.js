import { reactive } from "vue";

const shopItems = reactive({
  home: {
    kitchen: {
      small_microwave: {
        name: "Small Microwave",
        color: "white",
        benefit1: {
          stat: "hunger",
          quantity: 1,
        },
        base_price: 50,
        shop_stock: 1,
        character_owned: 0,
      },
    },
  },
});

// Load data from localstorage
export function loadShopItems(data) {
  let props = Object.keys(data);
  for (let property in props) {
    shopItems[props[property]] = data[props[property]];
  }
}

// Reset all data to what it should be at the start of a new game
export function startGameResetShopItems() {
  Object.keys(shopItems.home).forEach((category) => {
    Object.keys(shopItems.home[category]).forEach((item) => {
      shopItems.home[category][item]["shop_stock"] = 1;
      shopItems.home[category][item]["character_owned"] = 0;
      // console.log(shopItems.home[category][item]);
    });
  });
}

export default shopItems;
