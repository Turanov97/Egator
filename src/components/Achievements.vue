<template>
  <section class="about__achievements">
    <div class="container about__achievements-container">
      <div class="about__achievements-left">
        <img src="@/assets/img/about achievements.svg" alt="" />
      </div>

      <div class="about__achievements-right">
        <h1>Acheivements</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit quis illo animi labore cumque, mollitia aut, vitae
          molestias est ex dicta voluptates qui explicabo, consequuntur aperiam
          quod ullam blanditiis unde!
        </p>
        <div class="achievements__cards">
          <article class="achievements__card">
            <span class="achievements__icon">
              <i class="uil uil-video"></i>
            </span>
            <h3>450+</h3>
            <p>Courses</p>
          </article>

          <article class="achievements__card">
            <span class="achievements__icon">
              <i class="uil uil-users-alt"></i>
            </span>
            <h3>79,000+</h3>
            <p>Students</p>
          </article>

          <article class="achievements__card">
            <span class="achievements__icon">
              <i class="uil uil-trophy"></i>
            </span>
            <h3>26</h3>
            <p>Awards</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Achievements",
};
</script>

<style lang="scss" scoped></style>
