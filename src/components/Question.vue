<template>
  <section class="faqs">
    <h2>Frenquenttly Asked Questions</h2>
    <div class="container faqs__container">
      <article
        v-for="(faq, idx) in getData"
        :key="idx"
        :class="{ open: open && openIdx === idx }"
        class="faq"
        @click="() => openFaq(idx)"
      >
        <div class="faq__icon">
          <i
            :class="['uil', open && openIdx === idx ? 'uil-minus' : 'uil-plus']"
          ></i>
        </div>
        <div class="question__answer">
          <h4>{{faq.title}}</h4>
          <p>
            {{faq.body}}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "Question",
  data: () => ({
    open: false,
    openIdx: null,
  }),
  computed: {
    getData() {
      return [
        {
          title: "How do I know the right courses for me",
          body: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            aspernatur iure eveniet, quasi voluptatum aliquid dignissimos fugiat
            repellendus numquam cupiditate eum dolorem a, doloribus, mollitia ea
            nisi maiores nostrum quod.`,
        },
        {
          title: "How do I know the right courses for me",
          body: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            aspernatur iure eveniet, quasi voluptatum aliquid dignissimos fugiat
            repellendus numquam cupiditate eum dolorem a, doloribus, mollitia ea
            nisi maiores nostrum quod.`,
        },
        {
          title: "How do I know the right courses for me",
          body: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            aspernatur iure eveniet, quasi voluptatum aliquid dignissimos fugiat
            repellendus numquam cupiditate eum dolorem a, doloribus, mollitia ea
            nisi maiores nostrum quod.`,
        },
        {
          title: "How do I know the right courses for me",
          body: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            aspernatur iure eveniet, quasi voluptatum aliquid dignissimos fugiat
            repellendus numquam cupiditate eum dolorem a, doloribus, mollitia ea
            nisi maiores nostrum quod.`,
        },
        {
          title: "How do I know the right courses for me",
          body: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            aspernatur iure eveniet, quasi voluptatum aliquid dignissimos fugiat
            repellendus numquam cupiditate eum dolorem a, doloribus, mollitia ea
            nisi maiores nostrum quod.`,
        },
        {
          title: "How do I know the right courses for me",
          body: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            aspernatur iure eveniet, quasi voluptatum aliquid dignissimos fugiat
            repellendus numquam cupiditate eum dolorem a, doloribus, mollitia ea
            nisi maiores nostrum quod.`,
        },
        {
          title: "How do I know the right courses for me",
          body: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            aspernatur iure eveniet, quasi voluptatum aliquid dignissimos fugiat
            repellendus numquam cupiditate eum dolorem a, doloribus, mollitia ea
            nisi maiores nostrum quod.`,
        },
        {
          title: "How do I know the right courses for me",
          body: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            aspernatur iure eveniet, quasi voluptatum aliquid dignissimos fugiat
            repellendus numquam cupiditate eum dolorem a, doloribus, mollitia ea
            nisi maiores nostrum quod.`,
        },
      ];
    },
  },
  methods: {
    openFaq(idx) {
      if (this.openIdx === idx) {
        this.open = !this.open;
      }
      this.openIdx = idx;
    },
  },
};
</script>

<style lang="scss" scoped></style>
