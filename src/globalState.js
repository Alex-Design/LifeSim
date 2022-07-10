import {reactive} from "vue";

let globalData = {
  money: 100,
  health: 100,
};

export default reactive(globalData);
export function loadGlobalData(data) {
    globalData.money = data.money;
    globalData.health = data.health;
}
