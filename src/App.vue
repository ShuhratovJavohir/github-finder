<template>
  <Header />
  <div class="container">
    <Search />
    <div class="content" v-if="user && reposes">
      <User />
      <Repos 
        v-for="repos in reposes.data" 
        :key="repos.id"
        :repos="repos"
      />
    </div>
    <h2 class="enterOrError" v-else>{{ error == null ? 'Введите имя пользователя' : error}}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Header from "./components/Header.vue";
import Repos from "./components/Repos.vue";
import Search from "./components/Search.vue";
import User from "./components/User.vue";
export default {
  components: {
    Header,
    Search,
    User,
    Repos,
  },
  computed: {
    ...mapState(['user']),
    ...mapState(['reposes']),
    ...mapState(['error'])
  }
};
</script>