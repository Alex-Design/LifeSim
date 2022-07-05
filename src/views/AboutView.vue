<template>
  <div class="about">
    <WelcomeItem></WelcomeItem>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script>
import WelcomeItem from  "@/components/WelcomeItem.vue";
export default {
  components: { WelcomeItem },
}
</script>