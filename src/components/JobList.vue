<script setup>
</script>

<script>
import globalState, { loadGlobalData } from "../globalState";
import jobs from "../jobs";

export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      state: globalState,
      jobs: jobs,
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
    applyToJob(jobSector, jobLevel, jobData) {
      // apply to job

      console.log(jobSector, jobLevel, jobData);

      globalState.character.job = {
        sector: jobSector,
        level: jobLevel,
        job_data: jobData,
      };

      this.saveData();
    },
    attendJob(jobData, hours) {
      globalState.character.money += jobData.pay_per_hour * hours;
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
    <div v-if="state.character.job === null">
      <div v-for="(jobsInSector, jobSector) in jobs">
        <div v-if="jobsInSector !== null">
          {{ capitalize(jobSector) }}
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-10">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">Job name</th>
                  <th scope="col" class="px-6 py-3">Pay/hour</th>
                  <th scope="col" class="px-6 py-3">Requirement 1</th>
                  <th scope="col" class="px-6 py-3">Requirement 2</th>
                  <th scope="col" class="px-6 py-3">Requirement 3</th>
                  <!--              <th scope="col" class="px-6 py-3">Price</th>-->
                  <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Apply</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(jobData, jobLevel) in jobsInSector"
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {{ jobData.title }}
                  </th>
                  <td class="px-6 py-4">
                    {{ jobData.pay_per_hour }}
                  </td>
                  <td class="px-6 py-4">
                    <!--                <span v-if="item.hasOwnProperty('benefit1')">-->
                    <!--                  {{ item.benefit1.stat }}-->
                    <!--                  +{{ item.benefit1.quantity }}-->
                    <!--                </span>-->
                    <!--                <span v-else>-</span>-->
                  </td>
                  <td class="px-6 py-4">
                    <!--                <span v-if="item.hasOwnProperty('benefit2')">-->
                    <!--                  {{ item.benefit2.stat }}-->
                    <!--                  +{{ item.benefit2.quantity }}-->
                    <!--                </span>-->
                    <!--                <span v-else>-</span>-->
                  </td>
                  <td class="px-6 py-4">
                    <!--                <span v-if="item.hasOwnProperty('benefit3')">-->
                    <!--                  {{ item.benefit3.stat }}-->
                    <!--                  +{{ item.benefit3.quantity }}-->
                    <!--                </span>-->
                    <!--                <span v-else>-</span>-->
                  </td>
                  <!--              <td class="px-6 py-4">{{ item.base_price }}</td>-->
                  <td class="px-6 py-4 text-right">
                    <button
                      v-on:click="applyToJob(jobSector, jobLevel, jobData)"
                    >
                      Apply
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-10">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Job name</th>
              <th scope="col" class="px-27 py-3">Pay/hour</th>
              <th scope="col" class="px-6 py-3">Attend for...</th>
              <th scope="col" class="px-6 py-3"></th>
              <th scope="col" class="px-6 py-3"></th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Action</span>
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
                {{ state.character.job.job_data.title }}
              </th>
              <td class="px-6 py-4">
                {{ state.character.job.job_data.pay_per_hour }}
              </td>
              <td class="px-6 py-4">
                <button v-on:click="attendJob(state.character.job.job_data, 2)">
                  2 Hours
                </button>
              </td>
              <td class="px-6 py-4">
                <button v-on:click="attendJob(state.character.job.job_data, 6)">
                  4 Hours
                </button>
              </td>
              <td class="px-6 py-4">
                <button v-on:click="attendJob(state.character.job.job_data, 8)">
                  8 Hours
                </button>
              </td>
              <td class="px-6 py-4 text-right">
                <button v-on:click="attendJob(state.character.job.job_data, 10)">
                  10 Hours
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
