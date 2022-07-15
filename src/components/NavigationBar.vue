<script setup>
import CoinsSVG from "../assets/svg/coins.svg";
import Briefcase1SVG from "../assets/svg/briefcase-1.svg";
import ArtSVG from "../assets/svg/art.svg";
import ChairSVG from "../assets/svg/chair.svg";
import DrinkSVG from "../assets/svg/drink.svg";
import FoodSVG from "../assets/svg/food.svg";
import HealthSVG from "../assets/svg/health.svg";
import IslandSVG from "../assets/svg/island.svg";
import ShowerSVG from "../assets/svg/shower.svg";
import SleepSVG from "../assets/svg/sleep.svg";
import SmileSVG from "../assets/svg/smile.svg";
</script>

<script>
import globalState from "../globalState";
import { loadGlobalData, startGame } from "../globalState";
import shopItems from "../shopItems";
import { startGameResetShopItems } from "../shopItems";

export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      gameState: globalState,
      shopState: shopItems,
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
      }
    },
    startNewGame() {
      localStorage.removeItem("global-state");
      localStorage.removeItem("shop-state");
      startGame();
      startGameResetShopItems();
      this.saveData();
      this.loadData();
    },
  },
};
</script>

<template>
  <!-- Navbar -->

  <nav
    class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="/" class="flex items-center">
        <img
          src="/LifeSimLogo.png"
          class="mr-3 h-6 sm:h-9"
          alt="LifeSim Logo"
        />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >LifeSim</span
        >
      </a>
      <div class="flex items-center md:order-2">
        <button
          type="button"
          class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="dropdown"
        >
          <span class="sr-only">Open user menu</span>
          Me
        </button>
        <!-- Dropdown menu -->
        <div
          class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          id="dropdown"
          style="
            position: absolute;
            inset: auto auto 0 0;
            margin: 0;
            transform: translate3d(1051px, 1085.5px, 0px);
          "
          data-popper-reference-hidden=""
          data-popper-escaped=""
          data-popper-placement="top"
        >
          <div class="py-3 px-4">
            <span class="block text-sm text-gray-900 dark:text-white"
              >Bonnie Green</span
            >
            <span
              class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400"
              >name@lifesim.com</span
            >
          </div>
          <ul class="py-1" aria-labelledby="dropdown">
            <li>
              <a
                href="#"
                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Dashboard</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Settings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Earnings</a
              >
            </li>
            <li>
              <button
                v-on:click="startNewGame()"
                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                New Game
              </button>
            </li>
          </ul>
        </div>
        <button
          data-collapse-toggle="mobile-menu-2"
          type="button"
          class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
        id="mobile-menu-2"
      >
        <ul
          class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
        >
          <li>
            <CoinsSVG class="sidebar-icon"></CoinsSVG>
            <span
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              {{ gameState.character.money }}
            </span>
          </li>
          <li>
            <Briefcase1SVG class="sidebar-icon" />
            <div
              v-if="
                gameState.character.hasOwnProperty('job') &&
                gameState.character.job !== null
              "
            >
              <span
                v-if="gameState.character.job.hasOwnProperty('job_data')"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >{{ gameState.character.job.job_data.title }}
              </span>
            </div>
            <span v-else> No Job </span>
          </li>
          <li>
            <FoodSVG class="sidebar-icon"></FoodSVG>
            <span
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ gameState.character.fullness }}
            </span>
          </li>
          <li>
            <DrinkSVG class="sidebar-icon"></DrinkSVG>
            <span
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ gameState.character.hydration }}
            </span>
          </li>
          <li>
            <SleepSVG class="sidebar-icon"></SleepSVG>
            <span
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ gameState.character.energy }}
            </span>
          </li>
          <li>
            <ShowerSVG class="sidebar-icon"></ShowerSVG>
            <span
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ gameState.character.cleanliness }}
            </span>
          </li>
          <li>
            <ChairSVG class="sidebar-icon"></ChairSVG>
            <span
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ gameState.character.comfort }}
            </span>
          </li>
          <li>
            <ArtSVG class="sidebar-icon"></ArtSVG>
            <span
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ gameState.character.visuals }}
            </span>
          </li>
          <li>
            <HealthSVG class="sidebar-icon"></HealthSVG>
            <span
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ gameState.character.wellbeing }}
            </span>
          </li>
          <li>
            <IslandSVG class="sidebar-icon"></IslandSVG>
            <span
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ gameState.character.satisfaction }}
            </span>
          </li>
          <li>
            <SmileSVG class="sidebar-icon"></SmileSVG>
            <span
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ gameState.character.happiness }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
