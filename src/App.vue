<link rel="stylesheet" href="assets/base.css">
<script setup>
import {RouterLink, RouterView} from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>

  <!-- Sidebar -->
  <div class="sidebar light-grey bar-block" style="width:20%">
    <h3 class="bar-item">LifeSim</h3>
    <a href="#" class="bar-item button">Link 1</a>
    <a href="#" class="bar-item button">Link 2</a>
    <a href="#" class="bar-item button">Link 3</a>
  </div>

  <!-- Page Content -->
  <div style="margin-left:20%">

    <div class="container banner">
      <h1>Stats Here</h1>
    </div>

    <div class="container">
      <h2>Test Page</h2>
      <p class="ml-1">Test Text</p>
    </div>

  </div>

  <!--  <header>-->
  <!--    <img-->
  <!--      alt="Vue logo"-->
  <!--      class="logo"-->
  <!--      src="@/assets/logo.svg"-->
  <!--      width="125"-->
  <!--      height="125"-->
  <!--    />-->

  <!--    <div class="wrapper">-->
  <!--      <HelloWorld msg="You did it!" />-->

  <!--      <nav>-->
  <!--        <RouterLink to="/">Home</RouterLink>-->
  <!--        <RouterLink to="/about">About</RouterLink>-->
  <!--      </nav>-->
  <!--    </div>-->
  <!--  </header>-->

  <!--  <RouterView />-->
</template>

<style>
@import "@/assets/base.css";
</style>