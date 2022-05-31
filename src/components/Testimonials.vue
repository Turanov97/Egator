<template>
  <section class="container testimonials__container mySwiper">
    <h2>Students Testimonials</h2>
    <div class="swiper-wrapper">
      <article
        v-for="(reviews, idx) in getData"
        :key="idx"
        class="testimonial swiper-slide"
      >
        <div class="avatar">
          <img :src="reviews.image" alt="" />
        </div>
        <div class="testimonial__info">
          <h5>{{ reviews.name }}</h5>
          <small>{{ reviews.description }}</small>
        </div>
        <div class="testimonial__body">
          <p>
            {{ reviews.text }}
          </p>
        </div>
      </article>
    </div>
    <div class="swiper-pagination"></div>
  </section>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    getData() {
      return [
        {
          name: "Diana Ayi",
          description: "Student",
          image: require("@/assets/img/avatar1.jpg"),
          text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magni
            minus voluptates autem distinctio ab cupiditate provident quibusdam
            similique necessitatibus repellat officia sapiente praesentium velit
            quisquam vel ipsum, ad aperiam.F`,
        },
        {
          name: "Jorabek Aka",
          description: "Student",
          image: require("@/assets/img/avatar2.jpg"),
          text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magni
            minus voluptates autem distinctio ab cupiditate provident quibusdam
            similique necessitatibus repellat officia sapiente praesentium velit
            quisquam vel ipsum, ad aperiam.F`,
        },
        {
          name: "Aburaxmanov A",
          description: "Student",
          image: require("@/assets/img/avatar3.jpg"),
          text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magni
            minus voluptates autem distinctio ab cupiditate provident quibusdam
            similique necessitatibus repellat officia sapiente praesentium velit
            quisquam vel ipsum, ad aperiam.F`,
        },
        {
          name: "Narra laiy",
          description: "Student",
          image: require("@/assets/img/avatar4.jpg"),
          text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magni
            minus voluptates autem distinctio ab cupiditate provident quibusdam
            similique necessitatibus repellat officia sapiente praesentium velit
            quisquam vel ipsum, ad aperiam.F`,
        },
        {
          name: "Diana Ayi",
          description: "Student",
          image: require("@/assets/img/avatar5.jpg"),
          text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magni
            minus voluptates autem distinctio ab cupiditate provident quibusdam
            similique necessitatibus repellat officia sapiente praesentium velit
            quisquam vel ipsum, ad aperiam.F`,
        },
        {
          name: "Diana Ayi",
          description: "Student",
          image: require("@/assets/img/avatar6.jpg"),
          text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magni
            minus voluptates autem distinctio ab cupiditate provident quibusdam
            similique necessitatibus repellat officia sapiente praesentium velit
            quisquam vel ipsum, ad aperiam.F`,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped></style>
