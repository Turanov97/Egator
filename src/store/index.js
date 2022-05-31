import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teams: [],
    courses: [],
  },
  mutations: {
    setTeams: (state, teams) => {
      state.teams = teams;
    },
    setCourses: (state, courses) => {
      state.courses = courses;
    },
  },
  actions: {
    getTeamsApi({ commit }) {
      return axios
        .get("http://localhost:3000/team")
        .then((response) => {
          commit("setTeams", response.data);
        })
        .catch((e) => {
          console.log("Error on fetching team data", e.message);
        });
    },

    getCoursesApi({ commit }) {
      return axios
        .get("http://localhost:3000/courses")
        .then((response) => {
          commit("setCourses", response.data);
        })
        .catch((e) => {
          console.log("Error on fetching course data", e.message);
        });
    },
  },

  getters: {
    getTeams(state) {
      return state.teams;
    },

    getCourses(state) {
      return state.courses;
    },
  },
});
