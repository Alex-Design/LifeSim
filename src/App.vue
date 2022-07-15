<link rel="stylesheet" href="assets/css/base.css">
<script setup>
import {RouterView} from "vue-router";
import NavigationBar from "@/components/NavigationBar.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>

<script>
import globalState, {loadGlobalData} from "./globalState";

export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      state: globalState,
    };
  },
  mounted() {
    document.documentElement.classList.add('dark');
    this.loadData();
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
  },
};
</script>

<template>
  <div>
    <!-- Navbar -->
    <NavigationBar></NavigationBar>

    <!-- Sidebar -->
    <div class="flex">
      <Sidebar></Sidebar>
      <main class="flex-1 ml-12 mt-12 mr-12 mb-12">
        <RouterView></RouterView>
      </main>
    </div>
  </div>
</template>

<style>
@import "@/assets/css/base.css";
</style>