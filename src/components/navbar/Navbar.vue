<template>
  <nav :class="{ active }">
    <div class="container nav__container">
      <a href="index.html"><h4>EGATOR</h4></a>
      <ul :class="{ activeMenu }" class="nav__menu">
        <li v-for="link in links" :key="link.id">
          <router-link :to="link.url" class="a">{{ link.title }}</router-link>
        </li>
      </ul>
      <button v-if="!activeMenu" @click="actionMenu" id="open-menu-btn">
        <i class="uil uil-bars"></i>
      </button>
      <button @click="actionMenu" v-else id="close-menu-btn">
        <i class="uil uil-multiply"></i>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: "Home", url: "/", exact: true },
      { title: "About", url: "/about" },
      { title: "Courses", url: "/courses" },
      { title: "Contact", url: "/contact" },
    ],
    active: false,
    activeMenu: false,
  }),
  methods: {
    changeBg() {
      scrollY >= 80 ? (this.active = true) : (this.active = false);
    },
    actionMenu() {
      this.activeMenu = !this.activeMenu;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.changeBg);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.changeBg);
  },
};
</script>

<style lang="scss" scoped></style>
