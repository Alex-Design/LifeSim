import { reactive } from "vue";

const careers = reactive({
  writing: {
    1: {
      title: "Budding Writer",
      pay_per_hour: 10,
    },
    2: {
      title: "Tabloid Journalist",
      pay_per_hour: 15,
    },
    3: {
      title: "Magazine Columnist",
      pay_per_hour: 30,
    },
    4: {
      title: "Bestselling Author (example)",
      pay_per_hour: 200,
    },
  },
  art: null,
  retail: null,
  fashion: null,
  programming: {
    1: {
      title: "Junior Developer",
      pay_per_hour: 10,
    },
    2: {
      title: "Midweight Developer",
      pay_per_hour: 15,
    },
    3: {
      title: "Senior Developer",
      pay_per_hour: 30,
    },
    4: {
      title: "Team Lead",
      pay_per_hour: 200,
    },
    5: {
      title: "Idle Game Developer",
      pay_per_hour: 500,
    },
  },
  graphics: null,
  cooking: {
    1: {
      title: "Kitchen Porter",
      pay_per_hour: 10,
    },
    2: {
      title: "Junior Chef",
      pay_per_hour: 15,
    },
    3: {
      title: "Station Chef",
      pay_per_hour: 30,
    },
    4: {
      title: "Deputy Chef",
      pay_per_hour: 50,
    },
    5: {
      title: "Head Chef",
      pay_per_hour: 100,
    },
    6: {
      title: "Executive Chef",
      pay_per_hour: 200,
    },
  },
  mixology: null,
  science: null,
  law: null,
  medicine: null,
  military: null,
  beekeeping: null,
});

// Load data from localstorage
// export function loadShopItems(data) {
//   let props = Object.keys(data);
//   for (let property in props) {
//     shopItems[props[property]] = data[props[property]];
//   }
// }

// Reset all data to what it should be at the start of a new game
// export function startGameResetShopItems() {
//   Object.keys(shopItems.home).forEach((category) => {
//     Object.keys(shopItems.home[category]).forEach((item) => {
//       shopItems.home[category][item]["shop_stock"] = 1;
//       shopItems.home[category][item]["character_owned"] = 0;
//       // console.log(shopItems.home[category][item]);
//     });
//   });
// }

export default careers;
