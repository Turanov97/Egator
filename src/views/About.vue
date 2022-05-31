<template>
  <div>
    <Achievements />
    <Team /> 
  </div>
</template>

<script>
import Achievements from "@/components/Achievements.vue";
import Team from "@/components/Team.vue";

export default {
  components: { Achievements, Team },
};
</script>

<style lang="scss" scoped></style>
