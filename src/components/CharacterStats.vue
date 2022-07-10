<script setup></script>

<script>
import globalState from "../globalState";

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
    console.log(`initial hunger is ${this.state.character.hunger}.`);
  },
};
</script>

<template>
  <div >
    Current Game State:
    <br />
    {{ state }}
    <br />
    <br />
    Money: {{ state.character.money }}
    <br />
    Hunger: {{ state.character.hunger }}
    <br />
    Thirst: {{ state.character.thirst }}
    <br />
    Tiredness: {{ state.character.tiredness }}
    <br />
    Cleanliness: {{ state.character.cleanliness }}
    <br />
    Comfort: {{ state.character.comfort }}
    <br />
    Visuals: {{ state.character.visuals }}
    <br />
    Wellbeing: {{ state.character.wellbeing }}
    <br />
    Satisfaction: {{ state.character.satisfaction }}
    <br />
    Happiness: {{ state.character.happiness }}
    <br />
  </div>
</template>
