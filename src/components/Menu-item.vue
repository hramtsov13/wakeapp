<template>
  <div class="menu-wrapper">
    <div v-for="item in itemsArr" @click.prevent="goToItemPage(item)" :key="item.id" tag="div" class="menu-item">
      <img v-if="item.image_id !== null" class="menu-item__picture" :src="item.url" :alt="item.title" />
      <h2 class="menu-item__header">{{ item.title }}</h2>
      <span class="menu-item__delete" @click.stop="deletePickedItem(item)"></span>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
    name: 'App',
    methods: {
      ...mapMutations(['deleteItem']),
      goToItemPage(item) {
        this.$router.push('/menu-item-page/' + item.id);
      },
      deletePickedItem(item) {
        this.deleteItem(item);
      },
    },
    props: {
      itemsArr: {
        default: [],
        type: Array,
      },
    },
  };
</script>
