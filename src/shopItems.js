import { reactive } from "vue";

const shopItems = reactive({
  home: {
    kitchen: {
      small_microwave: {
        name: "Small Microwave",
        color: "white",
        benefit1: {
          stat: "fullness",
          quantity: 1,
        },
        base_price: 50,
        shop_stock: 1,
        character_owned: 0,
      },
      small_fridge: {
        name: "Small Fridge",
        color: "white",
        benefit1: {
          stat: "fullness",
          quantity: 1,
        },
        base_price: 200,
        shop_stock: 1,
        character_owned: 0,
      },
      small_sink: {
        name: "Small Sink",
        color: "white",
        benefit1: {
          stat: "hydration",
          quantity: 1,
        },
        base_price: 100,
        shop_stock: 1,
        character_owned: 0,
      },
    },
    bedroom: {
      single_bed: {
        name: "Single Bed",
        color: "white",
        benefit1: {
          stat: "energy",
          quantity: 2,
        },
        benefit2: {
          stat: "comfort",
          quantity: 2,
        },
        base_price: 300,
        shop_stock: 1,
        character_owned: 0,
      },
      double_bed: {
        name: "Double Bed",
        color: "white",
        benefit1: {
          stat: "energy",
          quantity: 3,
        },
        benefit2: {
          stat: "comfort",
          quantity: 3,
        },
        base_price: 400,
        shop_stock: 1,
        character_owned: 0,
      },
      small_nightstand: {
        name: "Small Nightstand",
        color: "white",
        benefit1: {
          stat: "wellbeing",
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
