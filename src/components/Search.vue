<template>
  <div class="search">
    <input
      type="text"
      class="search-input"
      v-model="input"
      placeholder="Введите имя пользователя"
      @keydown.enter="getUser(input),getRepos(input), (input = '')"
    />
    <button class="search-btn" @click="getUser(input),getRepos(input),(input = '')">
      Найти
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    ...mapActions(["getUser"]),
    ...mapActions(["getRepos"]),
  },
};
</script>