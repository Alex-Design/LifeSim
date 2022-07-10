import { reactive } from "vue";

let globalDataStart = {
  character: {
    money: 100,
    hunger: 100,
    thirst: 100,
    tiredness: 100,
    wellbeing: 100,
    comfort: 100,
    cleanliness: 100,
    visuals: 100,
    satisfaction: 100,
    happiness: 100,
  },
  home: {
    kitchen: {
    },
  },
};

const globalData = reactive({
  character: {
    money: 100,
    hunger: 100,
    thirst: 100,
    tiredness: 100,
    wellbeing: 100,
    comfort: 100,
    cleanliness: 100,
    visuals: 100,
    satisfaction: 100,
    happiness: 100,
  },
  home: {
    kitchen: {
    },
  },
});

// Load data from localstorage
export function loadGlobalData(data) {
  let props = Object.keys(data);
  for (let property in props) {
    globalData[props[property]] = data[props[property]];
  }
}

// Reset all data to what it should be at the start of a new game
export function startGame() {
  let props = Object.keys(globalDataStart);
  for (let property in props) {
    globalData[props[property]] = globalDataStart[props[property]];
  }
}

export default globalData;
