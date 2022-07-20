<script setup>
</script>

<script>
import Swal from "sweetalert2";
import globalState, { loadGlobalData } from "../globalState";
import currentEvents from "../events";
import {
  addToCurrentEvents,
  removeFromCurrentEvents,
  loadEventData,
  generateRandomEvent,
} from "../events";

export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      state: globalState,
      currentEventsState: currentEvents,
    };
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    saveData() {
      localStorage.setItem("event-state", JSON.stringify(currentEvents));
      localStorage.getItem("event-state");
    },
    loadData() {
      let retrievedObject = localStorage.getItem("global-state");
      if (retrievedObject) {
        let retrievedObjectParsed = JSON.parse(retrievedObject);
        loadGlobalData(retrievedObjectParsed);
      }

      let retrievedEventsObject = localStorage.getItem("event-state");
      if (retrievedEventsObject) {
        let retrievedEventsObjectParsed = JSON.parse(retrievedEventsObject);
        loadEventData(retrievedEventsObjectParsed);
      }

      this.$forceUpdate();
    },
    // performActivity(activity) {
    //   for (let i = 1; i <= Object.keys(activity.effects).length; i++) {
    //     if (activity.effects.hasOwnProperty(i)) {
    //       if (activity.effects[i].effect === "+") {
    //         globalState.character[activity.effects[i].stat] +=
    //           activity.effects[i].quantity;
    //       } else {
    //         globalState.character[activity.effects[i].stat] -=
    //           activity.effects[i].quantity;
    //       }
    //     }
    //   }
    //   globalState.character.money -= activity.cost;
    //   this.saveData();
    // },
    vueAddToCurrentEvents(eventType, eventId) {
      addToCurrentEvents(eventType, eventId);
    },
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    handleEvent(eventId, eventString) {
      let finalEventString = "this." + eventString;
      eval(finalEventString);
      removeFromCurrentEvents(eventId);
    },
    eventAnswerPrankCall() {
      Swal.fire({
        text: 'You have been pranked!',
        icon: 'error',
        confirmButtonText: 'Argh!'
      });
    },
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    this.loadData();
    generateRandomEvent();
    this.saveData();
  },
};
</script>

<template>
  <div>
    <div v-if="Object.keys(currentEventsState).length >= 1">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-10">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Event Name</th>
              <th scope="col" class="px-6 py-3">Event Details</th>
              <th scope="col" class="px-6 py-3"></th>
              <th scope="col" class="px-6 py-3"></th>
              <th scope="col" class="px-6 py-3"></th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Apply</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(event, eventKey) in currentEventsState"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {{ event.name }}
              </th>
              <td class="px-6 py-4">
                {{ event.text }}
              </td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4 text-right">
                <button v-on:click="handleEvent(eventKey, event.eventFunction)">
                  Perform
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else>No current events, check back later!</div>
  </div>
</template>
