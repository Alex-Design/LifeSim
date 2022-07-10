<script setup></script>

<script>
import globalState from "../globalState";

export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      state: globalState,
      id: 0,
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
    console.log(`initial hunger is ${this.state.hunger}.`);
  },
};
</script>

<template>
  <div >
    {{ state }}
    <br />
    Money: {{ state.money }}
    <br />
    Hunger: {{ state.hunger }}
    <br />
    Thirst: {{ state.thirst }}
    <br />
    Tiredness: {{ state.tiredness }}
    <br />
    Wellbeing: {{ state.wellbeing }}
    <br />
    Comfort: {{ state.comfort }}
    <br />
    Cleanliness: {{ state.cleanliness }}
    <br />
    Visuals: {{ state.visuals }}
    <br />
    Satisfaction: {{ state.satisfaction }}
    <br />
    Happiness: {{ state.happiness }}
    <br />
  </div>
</template>
