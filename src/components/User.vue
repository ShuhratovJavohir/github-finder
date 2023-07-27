<template>
  <div class="user">
    <div class="user__content">
      <div class="user__left">
        <img :src="user.data.avatar_url" alt="" class="user__left-img" />
        <a :href="user.data.html_url" class="user__left-btn">ПОСЕТИТЬ</a>
      </div>

      <ul class="user__right">
        <li class="user__right-item">{{ user.data.login }}</li>
        <li class="user__right-item">Репозиториев: <span>{{ reposLength }}</span></li>
        <li class="user__right-item">Создан: <span>{{ user.data.created_at }}</span></li>
        <li class="user__right-item">Подписщиков: <span>{{ user.data.followers }}</span></li>
        <li class="user__right-item">Подписок: <span>{{ user.data.following }}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['user']),
    ...mapState(['reposes']),

    reposLength(){
      return this.reposes.data.length;
    }
  },
};
</script>