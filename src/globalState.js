import { reactive } from "vue";

let globalDataStart = {
  character: {
    money: 100,
    hunger: 100,
    thirst: 100,
    tiredness: 100,
    cleanliness: 100,
    comfort: 0,
    visuals: 0,
    wellbeing: 0,
    satisfaction: 0,
    happiness: 0,
  },
  home: {
    kitchen: {},
    bedroom: {},
  },
};

const globalData = reactive({
  character: {
    money: 100,
    hunger: 100,
    thirst: 100,
    tiredness: 100,
    cleanliness: 100,
    comfort: 0,
    visuals: 0,
    wellbeing: 0,
    satisfaction: 0,
    happiness: 0,
  },
  home: {
    kitchen: {},
    bedroom: {},
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
