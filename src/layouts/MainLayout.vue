<template>
  <div>
     <Navbar />
    <router-view></router-view>
     <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar.vue"
import Footer from "@/components/footer/Footer.vue"
export default {
   components:{
      Navbar,Footer
   }
};
</script>

<style lang="scss" scoped></style>
