<script setup>
</script>

<script>
import globalState from "../globalState";
import { loadData } from "../globalState";

export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      money: globalState.money,
      state: globalState,
    };
  },
  mounted() {
    this.loadData();
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    purchaseItem() {
      globalState.money -= 10;
      this.money = globalState.money;
      this.saveData();
    },
    saveData() {
      localStorage.setItem("global-state", JSON.stringify(globalState));
      let retrievedObject = localStorage.getItem("global-state");
      console.log("retrievedObject: ", JSON.parse(retrievedObject));
    },
    loadData() {
      let retrievedObject = localStorage.getItem("global-state");
      console.log(retrievedObject);
      let retrievedObjectParsed = JSON.parse(retrievedObject);
      loadData(retrievedObjectParsed);
      console.log(globalState);
      this.$forceUpdate();
    },
  },
};
</script>

<template>
  Money: {{ state.money }}
  <button v-on:click="purchaseItem">Buy</button>
  <button v-on:click="saveData">Save</button>
  <button v-on:click="loadData">Load</button>
</template>
