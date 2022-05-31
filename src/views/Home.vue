<template>
  <div class="home">
    <Heroic />
    <Categories />
    <Courses limit="3"/>
    <Question />
    <Testimonials />
  </div>
</template>

<script>
// @ is an alias to /src
import Heroic from "../components/heroic/Heroic.vue";
import Categories from "../components/Categories.vue";
import Courses from "../components/Courses.vue";
import Question from "../components/Question.vue";
import Testimonials from "../components/Testimonials.vue";

export default {
  name: "Home",
  components: {
    Heroic,
    Categories,
    Courses,
    Question,
    Testimonials,
  },
};
</script>
