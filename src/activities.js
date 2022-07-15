import { reactive } from "vue";

const activities = reactive({
  write_book: {
    name: "Write Book",
    effects: {
      1: {
        stat: "satisfaction",
        effect: "+",
        quantity: 10,
      },
    },
    cost: 0,
  },
  rock_climbing: {
    name: "Rock Climbing",
    effects: {
      1: {
        stat: "satisfaction",
        effect: "+",
        quantity: 20,
      },
      2: {
        stat: "hydration",
        effect: "-",
        quantity: 10,
      },
    },
    cost: 10,
  },
});

export default activities;
