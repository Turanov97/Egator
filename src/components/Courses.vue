<template>
  <section class="courses">
    <h2>Our Popular</h2>
    <div class="container courses__container">
      <template v-for="(course, idx) in getCourses">
        <CourseItem :course="course" :key="idx" v-if="getLocalLimit > idx" />
      </template>
    </div>
  </section>
</template>

<script>
import CourseItem from "../components/CourseItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    limit: {
      type: [Number, String],
      default: null,
    },
  },
  data: () => ({
    innerLimit: null,
  }),
  components: {
    CourseItem,
  },
  methods: {
    ...mapActions(["getCoursesApi"]),
  },
  computed: {
    ...mapGetters(["getCourses"]),
    getLocalLimit() {
      return this.limit || this.getCourses?.length;
    },
  },
  mounted() {
    this.getCoursesApi();
  },
};
</script>

<style lang="sass" scoped></style>
