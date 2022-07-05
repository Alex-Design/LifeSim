<link rel="stylesheet" href="assets/base.css">
<script setup>
import {RouterLink, RouterView} from "vue-router";
</script>

<!--<script>-->
<!--export default {-->
<!--  // Properties returned from data() become reactive state-->
<!--  // and will be exposed on `this`.-->
<!--  data() {-->
<!--    return {-->
<!--      count: 0,-->
<!--    };-->
<!--  },-->

<!--  // Methods are functions that mutate state and trigger updates.-->
<!--  // They can be bound as event listeners in templates.-->
<!--  methods: {-->
<!--    increment() {-->
<!--      this.count++;-->
<!--    },-->
<!--  },-->

<!--  // Lifecycle hooks are called at different stages-->
<!--  // of a component's lifecycle.-->
<!--  // This function will be called when the component is mounted.-->
<!--  mounted() {-->
<!--    console.log(`The initial count is ${this.count}.`);-->
<!--  },-->
<!--};-->
<!--</script>-->

<template>
  <!-- Sidebar -->
  <div class="sidebar light-grey bar-block" style="width:200px">
    <h3 class="bar-item">LifeSim</h3>
    <RouterLink to="/" class="bar-item button">Character</RouterLink>
    <RouterLink to="/shop" class="bar-item button">Shop</RouterLink>
  </div>

  <!-- Page Content -->
  <div style="margin-left: 200px;">

    <div class="container banner">
      <h1>Stats Here</h1>
    </div>

    <div class="container">
      <h2>Test Text</h2>
      <!-- Displays based on what is selected in RouterLink -->
      <RouterView />
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>