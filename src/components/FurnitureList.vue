<script setup></script>

<script>
import globalState, {loadGlobalData} from "../globalState";
import shopItems from "../shopItems";

export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      state: globalState,
      shopItems: shopItems,
    };
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    saveData() {
      localStorage.setItem("global-state", JSON.stringify(globalState));
      localStorage.getItem("global-state");
    },
    loadData() {
      let retrievedObject = localStorage.getItem("global-state");
      if (retrievedObject) {
        let retrievedObjectParsed = JSON.parse(retrievedObject);
        loadGlobalData(retrievedObjectParsed);
        this.$forceUpdate();
      }
    },
    useItem(item) {
      console.log(item);
      if (item.hasOwnProperty("benefit1")) {
        let stat = item.benefit1.stat;
        let quantity = item.benefit1.quantity;
        globalState.character[stat] += quantity;
        console.log(stat + " increased by " + quantity);
      }
      if (item.hasOwnProperty("benefit2")) {
        let stat = item.benefit2.stat;
        let quantity = item.benefit2.quantity;
        globalState.character[stat] += quantity;
        console.log(stat + " increased by " + quantity);
      }
      if (item.hasOwnProperty("benefit3")) {
        let stat = item.benefit3.stat;
        let quantity = item.benefit3.quantity;
        globalState.character[stat] += quantity;
        console.log(stat + " increased by " + quantity);
      }
      this.saveData();
    },
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    this.loadData();
  },
};
</script>

<template>
  <div>
    <div v-for="itemLocation in Object.keys(state.home)">
      {{ itemLocation }}
      <div
        v-if="Object.keys(state.home[itemLocation]).length >= 1"
        class="relative overflow-x-auto shadow-md sm:rounded-lg mb-10"
      >
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Product name</th>
              <th scope="col" class="px-6 py-3">Color</th>
              <th scope="col" class="px-6 py-3">Benefit 1</th>
              <th scope="col" class="px-6 py-3">Benefit 2</th>
              <th scope="col" class="px-6 py-3">Benefit 3</th>
<!--              <th scope="col" class="px-6 py-3">Price</th>-->
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, itemName) in state.home[
                itemLocation
              ]"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {{ item.name }}
              </th>
              <td class="px-6 py-4">{{ item.color }}</td>
              <td class="px-6 py-4">
                <span v-if="item.hasOwnProperty('benefit1')">
                  {{ item.benefit1.stat }}
                  +{{ item.benefit1.quantity }}
                </span>
                <span v-else>-</span>
              </td>
              <td class="px-6 py-4">
                <span v-if="item.hasOwnProperty('benefit2')">
                  {{ item.benefit2.stat }}
                  +{{ item.benefit2.quantity }}
                </span>
                <span v-else>-</span>
              </td>
              <td class="px-6 py-4">
                <span v-if="item.hasOwnProperty('benefit3')">
                  {{ item.benefit3.stat }}
                  +{{ item.benefit3.quantity }}
                </span>
                <span v-else>-</span>
              </td>
<!--              <td class="px-6 py-4">{{ item.base_price }}</td>-->
              <td class="px-6 py-4 text-right">
                <button
                  v-if="item.character_owned >= 1"
                  v-on:click="useItem(item)"
                >
                  Use
                </button>
                <button v-else class="disabled">-</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

<!--    Current Game State:-->
<!--    <br />-->
<!--    {{ state }}-->
<!--    <br />-->
<!--    <br />-->
<!--    Money: {{ state.character.money }}-->
<!--    <br />-->
<!--    fullness: {{ state.character.fullness }}-->
<!--    <br />-->
<!--    hydration: {{ state.character.hydration }}-->
<!--    <br />-->
<!--    energy: {{ state.character.energy }}-->
<!--    <br />-->
<!--    Cleanliness: {{ state.character.cleanliness }}-->
<!--    <br />-->
<!--    Comfort: {{ state.character.comfort }}-->
<!--    <br />-->
<!--    Visuals: {{ state.character.visuals }}-->
<!--    <br />-->
<!--    Wellbeing: {{ state.character.wellbeing }}-->
<!--    <br />-->
<!--    Satisfaction: {{ state.character.satisfaction }}-->
<!--    <br />-->
<!--    Happiness: {{ state.character.happiness }}-->
<!--    <br />-->
  </div>
</template>
