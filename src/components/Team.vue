<template>
  <section class="team">
    <h2>Meet our Team</h2>
    <div class="container team__container">
      <article v-for="(team, idx) in getTeams" :key="idx" class="team__member">
        <div class="team__member-image">
          <img :src="team.image" alt="" />
        </div>
        <div class="team__member-info">
          <h4>{{ team.name }}</h4>
          <p>{{ team.description }}</p>
        </div>
        <div class="team__member-socials">
          <a :href="team.urlInstagram" target="_blank"
            ><i class="uil uil-instagram"></i
          ></a>
          <a :href="team.urlTwitter" target="_blank"
            ><i class="uil uil-twitter-alt"></i
          ></a>
          <a :href="team.urlLinkedin" target="_blank"
            ><i class="uil uil-linkedin-alt"></i
          ></a>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
// import axios from "axios";
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "Team",
  data: () => ({
    // teams: []
  }),
  methods: {
    ...mapActions([
      'getTeamsApi'
    ]) 
  },
  computed: {
    ...mapGetters([
      'getTeams'
    ])
    // async renderTeam() {
    //   let url = "http://localhost:3000/team";
    //   const res = await fetch(url)
    //   const posts = await res.json()
    //   this.teams = posts
    // },
  },
  mounted() {
    this.getTeamsApi()
    // this.renderTeam
  },
};
</script>

<style lang="scss" scoped></style>
