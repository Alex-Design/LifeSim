import { reactive } from "vue";

let globalDataStart = {
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
};

let globalData = {
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
};

export function loadGlobalData(data) {
  globalData.money = data.money;
  globalData.hunger = data.hunger;
  globalData.thirst = data.thirst;
  globalData.tiredness = data.tiredness;
  globalData.wellbeing = data.wellbeing;
  globalData.comfort = data.comfort;
  globalData.cleanliness = data.cleanliness;
  globalData.visuals = data.visuals;
  globalData.satisfaction = data.satisfaction;
  globalData.happiness = data.happiness;
}
export function startGame() {
  globalData.money = globalDataStart.money;
  globalData.hunger = globalDataStart.hunger;
  globalData.thirst = globalDataStart.thirst;
  globalData.tiredness = globalDataStart.tiredness;
  globalData.wellbeing = globalDataStart.wellbeing;
  globalData.comfort = globalDataStart.comfort;
  globalData.cleanliness = globalDataStart.cleanliness;
  globalData.visuals = globalDataStart.visuals;
  globalData.satisfaction = globalDataStart.satisfaction;
  globalData.happiness = globalDataStart.happiness;
}
export default reactive(globalData);
