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
    <div
      v-for="shopItemHomeLocation in Object.keys(shopItems.home)"
      class="relative overflow-x-auto shadow-md sm:rounded-lg mb-10"
    >
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
            v-for="(shopItem, shopItemItemName) in shopItems.home[
              shopItemHomeLocation
            ]"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              {{ shopItem.name }}
            </th>
            <td class="px-6 py-4">{{ shopItem.color }}</td>
            <td class="px-6 py-4">
              <span v-if="shopItem.hasOwnProperty('benefit1')">
                {{ shopItem.benefit1.stat }}
                +{{ shopItem.benefit1.quantity }}
              </span>
              <span v-else>-</span>
            </td>
            <td class="px-6 py-4">
              <span v-if="shopItem.hasOwnProperty('benefit2')">
                {{ shopItem.benefit2.stat }}
                +{{ shopItem.benefit2.quantity }}
              </span>
              <span v-else>-</span>
            </td>
            <td class="px-6 py-4">
              <span v-if="shopItem.hasOwnProperty('benefit3')">
                {{ shopItem.benefit3.stat }}
                +{{ shopItem.benefit3.quantity }}
              </span>
              <span v-else>-</span>
            </td>
            <td class="px-6 py-4">{{ shopItem.base_price }}</td>
            <td class="px-6 py-4 text-right">
              <button
                v-if="shopItem.shop_stock >= 1"
                v-on:click="
                  purchaseItem(
                    'home',
                    shopItemHomeLocation,
                    shopItemItemName,
                    shopItem.base_price
                  )
                "
              >
                Buy
              </button>
              <button v-else class="disabled">Sold Out</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
