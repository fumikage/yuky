<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/layouts/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
