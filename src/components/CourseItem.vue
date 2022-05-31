<template>
  <div class="courses">
    <article class="course" v-if="course">
      <div class="course__image">
        <img :src="course.image" alt="course.image" />
      </div>
      <div class="course__info">
        <h4>{{ course.title }}</h4>
        <p>
          {{ course.body }}
        </p>
        <a href="" class="btn btn-primary">Learn More</a>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "CourseItem",
  props: {
    course: {
      type: Object,
      require: true,
    },
  },
  data: () => ({}),
  mounted() {},
};
</script>

<style scoped>
.courses {
  margin-top: 1rem;
}
</style>
