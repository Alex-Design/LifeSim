<script setup>
import CoinsSVG from "../assets/svg/coins.svg";
</script>

<script>
import globalState from "../globalState";
import { loadGlobalData } from "../globalState";

import shopItems from "../shopItems";
import { loadShopItems } from "../shopItems";

export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      gameState: globalState,
      shopItems: shopItems,
    };
  },
  mounted() {
    this.loadData();
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    purchaseItem(location, category, itemname) {
      console.log("purchasing: " + location + "/" + category + "/" + itemname);

      globalState.character.money -=
        this.shopItems[location][category][itemname]["base_price"];
      this.shopItems[location][category][itemname]["shop_stock"] -= 1;
      this.shopItems[location][category][itemname]["character_owned"] += 1;

      globalState[location][category][itemname] =
        this.shopItems[location][category][itemname];

      console.log("purchase complete.");
      // console.log(this.shopItems[location][category][itemname]);
      this.saveData();
    },
    saveData() {
      localStorage.setItem("global-state", JSON.stringify(globalState));
      localStorage.getItem("global-state");

      localStorage.setItem("shop-state", JSON.stringify(shopItems));
      localStorage.getItem("shop-state");
    },
    loadData() {
      let retrievedObject = localStorage.getItem("global-state");
      if (retrievedObject) {
        let retrievedObjectParsed = JSON.parse(retrievedObject);
        loadGlobalData(retrievedObjectParsed);
      }
      let retrievedShopObject = localStorage.getItem("shop-state");
      if (retrievedShopObject) {
        let retrievedShopObjectParsed = JSON.parse(retrievedShopObject);
        loadShopItems(retrievedShopObjectParsed);
      }
      this.$forceUpdate();
    },
  },
};
</script>

<template>
  <div>
    <div>
      <CoinsSVG class="sidebar-icon" /><span>
        {{ globalState.character.money }}</span
      >
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-10">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Product name</th>
            <th scope="col" class="px-6 py-3">Color</th>
            <th scope="col" class="px-6 py-3">Benefit 1</th>
            <th scope="col" class="px-6 py-3">Benefit 2</th>
            <th scope="col" class="px-6 py-3">Benefit 3</th>
            <th scope="col" class="px-6 py-3">Price</th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Small Fridge
            </th>
            <td class="px-6 py-4">White</td>
            <td class="px-6 py-4">Hunger +1</td>
            <td class="px-6 py-4">-</td>
            <td class="px-6 py-4">-</td>
            <td class="px-6 py-4">300</td>
            <td class="px-6 py-4 text-right">
              <button
                v-on:click="
                  purchaseItem('home', 'kitchen', 'small_microwave', 300)
                "
              >
                Buy
              </button>
            </td>
          </tr>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Small Microwave
            </th>
            <td class="px-6 py-4">White</td>
            <td class="px-6 py-4">Hunger +1</td>
            <td class="px-6 py-4">-</td>
            <td class="px-6 py-4">-</td>
            <td class="px-6 py-4">50</td>
            <td class="px-6 py-4 text-right">
              <button v-on:click="purchaseItem(50)">Buy</button>
            </td>
          </tr>
          <tr
            class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Basic Gas Cooker
            </th>
            <td class="px-6 py-4">White</td>
            <td class="px-6 py-4">Hunger +1</td>
            <td class="px-6 py-4">-</td>
            <td class="px-6 py-4">-</td>
            <td class="px-6 py-4">400</td>
            <td class="px-6 py-4 text-right">
              <button v-on:click="purchaseItem(400)">Buy</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Product name</th>
            <th scope="col" class="px-6 py-3">Color</th>
            <th scope="col" class="px-6 py-3">Benefit 1</th>
            <th scope="col" class="px-6 py-3">Benefit 2</th>
            <th scope="col" class="px-6 py-3">Benefit 3</th>
            <th scope="col" class="px-6 py-3">Price</th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Small Fridge
            </th>
            <td class="px-6 py-4">White</td>
            <td class="px-6 py-4">Hunger +1</td>
            <td class="px-6 py-4">-</td>
            <td class="px-6 py-4">-</td>
            <td class="px-6 py-4">300</td>
            <td class="px-6 py-4 text-right">
              <button v-on:click="purchaseItem(300)">Buy</button>
            </td>
          </tr>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Small Microwave
            </th>
            <td class="px-6 py-4">White</td>
            <td class="px-6 py-4">Hunger +1</td>
            <td class="px-6 py-4">-</td>
            <td class="px-6 py-4">-</td>
            <td class="px-6 py-4">50</td>
            <td class="px-6 py-4 text-right">
              <button v-on:click="purchaseItem(50)">Buy</button>
            </td>
          </tr>
          <tr
            class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Basic Gas Cooker
            </th>
            <td class="px-6 py-4">White</td>
            <td class="px-6 py-4">Hunger +1</td>
            <td class="px-6 py-4">-</td>
            <td class="px-6 py-4">-</td>
            <td class="px-6 py-4">400</td>
            <td class="px-6 py-4 text-right">
              <button v-on:click="purchaseItem(400)">Buy</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
