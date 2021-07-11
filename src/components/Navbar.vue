<template>
  <nav class="navbar">
    <div class="container">
      <ul class="navbar-list">
        <router-link tag="li" v-for="route in routes" :key="route.title" to="/" class="navbar-list__item">
          <a href="index.html">
            <div class="navbar-list__icon">
              <img :src="route.src" :alt="route.title" />
            </div>
            <p>{{ route.title }}</p>
          </a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    data: () => {
      return {
        isActive: false,
        routes: [
          {
            url: '/',
            title: 'Главная',
            src: require('@/assets/img/navbar/home.svg'),
          },
          {
            url: '/',
            title: 'Живопись',
            src: require('@/assets/img/navbar/category.svg'),
          },
          {
            url: '/',
            title: 'Натюрморт',
            src: require('@/assets/img/navbar/star.svg'),
          },
          {
            url: '/',
            title: 'Портрет',
            src: require('@/assets/img/navbar/medkarta.svg'),
          },
          {
            url: '/',
            title: 'Личный кабинет',
            src: require('@/assets/img/navbar/profile.svg'),
          },
        ],
      };
    },
    mounted() {},
  };
</script>
