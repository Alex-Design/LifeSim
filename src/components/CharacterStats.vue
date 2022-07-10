<script setup>
</script>

<script>
import globalState from "../globalState";
globalState.health = 50;

export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      state: globalState,
    };
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    // increment() {
    //   this.count++;
    // },
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    // console.log(`The initial count is ${this.count}.`);
  },
};
</script>

<template>
  Health: {{state.health}}
  <br />
  Money: {{state.money}}
</template>
