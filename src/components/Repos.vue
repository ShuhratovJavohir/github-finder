<template>
  <div class="repos">
    <div class="repos__info">
      <h2 class="repos__info-title">{{ repos.name }}</h2>
      <p class="repos__info-star">Кол-во звёзд: 0</p>
      <p class="repos__info-date">Дата добавления: {{ repos.created_at }}</p>
    </div>
    <a :href="repos.html_url" class="repos-link">ПОСЕТИТЬ</a>
  </div>
</template>

<script>
export default {
  props: {
    repos: { typeof: Object },
  },
};
</script>