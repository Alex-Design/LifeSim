<script setup>
import Briefcase1SVG from "../assets/svg/briefcase-1.svg";
// import Briefcase2SVG from "../assets/svg/briefcase-2.svg";
import CalendarSVG from "../assets/svg/calendar.svg";
import CoinsSVG from "../assets/svg/coins.svg";
import HomeSVG from "../assets/svg/home.svg";
import PersonSVG from "../assets/svg/person.svg";
import TennisSVG from "../assets/svg/tennis.svg";
</script>

<script>
import globalState from "../globalState";
import { loadGlobalData } from "../globalState";

export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      state: globalState,
    };
  },
  mounted() {
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
  <div class="w-64" aria-label="Sidebar">
    <div
      class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 h-screen"
    >
      <a href="/" class="flex items-center pl-2.5 mb-5">
        <img
          src="/LifeSimLogo.png"
          class="mr-3 h-6 sm:h-7"
          alt="Lifesim Logo"
        />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >LifeSim</span
        >
      </a>
      <ul class="space-y-2">
        <li>
          <RouterLink
              to="/character"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <PersonSVG class="sidebar-icon" />
            <span class="flex-1 ml-3 whitespace-nowrap">Character</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/home"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <HomeSVG class="sidebar-icon" />
            <span class="flex-1 ml-3 whitespace-nowrap">Home</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/shop"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <CoinsSVG class="sidebar-icon" />
            <span class="flex-1 ml-3 whitespace-nowrap">Shop</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/shop"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Briefcase1SVG class="sidebar-icon" />
            <span class="flex-1 ml-3 whitespace-nowrap">Job</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/shop"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <TennisSVG class="sidebar-icon" />
            <span class="flex-1 ml-3 whitespace-nowrap">Activities</span>
          </RouterLink>
        </li>
      </ul>
      <ul
        class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700"
      >
        <li>
          <RouterLink
            to="/shop"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <CalendarSVG class="sidebar-icon" />
            <span class="flex-1 ml-3 whitespace-nowrap">Placeholder</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
