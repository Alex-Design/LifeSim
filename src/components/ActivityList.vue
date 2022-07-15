<script setup>
import CoinsSVG from "../assets/svg/coins.svg";
</script>

<script>
import globalState, { loadGlobalData } from "../globalState";
import activities from "../activities";

export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      state: globalState,
      activities: activities,
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
    performActivity(activity) {
      for (let i = 1; i <= Object.keys(activity.effects).length; i++) {
        if (activity.effects.hasOwnProperty(i)) {
          if (activity.effects[i].effect === "+") {
            globalState.character[activity.effects[i].stat] +=
              activity.effects[i].quantity;
          } else {
            globalState.character[activity.effects[i].stat] -=
              activity.effects[i].quantity;
          }
        }
      }
      globalState.character.money -= activity.cost;
      this.saveData();
    },
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
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
    <CoinsSVG class="sidebar-icon" /><span> {{ state.character.money }}</span>
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-10">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Activity Name</th>
              <th scope="col" class="px-6 py-3">Price/hour</th>
              <th scope="col" class="px-6 py-3">Effect 1</th>
              <th scope="col" class="px-6 py-3">Effect 2</th>
              <th scope="col" class="px-6 py-3">Effect 3</th>
              <!--              <th scope="col" class="px-6 py-3">Price</th>-->
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Apply</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="activity in activities"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {{ activity.name }}
              </th>
              <td class="px-6 py-4">
                {{ activity.cost }}
              </td>
              <td class="px-6 py-4" v-if="activity.effects.hasOwnProperty(1)">
                {{ activity.effects[1].stat }} {{ activity.effects[1].effect }}{{ activity.effects[1].quantity }}
              </td>
              <td class="px-6 py-4" v-else>
                -
              </td>
              <td class="px-6 py-4" v-if="activity.effects.hasOwnProperty(2)">
                {{ activity.effects[2].stat }} {{ activity.effects[2].effect }}{{ activity.effects[2].quantity }}
              </td>
              <td class="px-6 py-4" v-else>
                -
              </td>
              <td class="px-6 py-4" v-if="activity.effects.hasOwnProperty(3)">
                {{ activity.effects[3].stat }} {{ activity.effects[3].effect }}{{ activity.effects[3].quantity }}
              </td>
              <td class="px-6 py-4" v-else>
                -
              </td>
              <td class="px-6 py-4 text-right">
                <button v-on:click="performActivity(activity)">
                  Perform
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
