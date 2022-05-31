<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  components: { MainLayout },
  computed: {
    layout() {
      return "main-layout";
    },
  },
};
</script>

 <style>
      /* background: url("@/assets/img/bg-texture.png"); */
  </style>
