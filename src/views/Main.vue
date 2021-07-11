<template>
  <main class="body">
    <div class="container">
      <AddItem v-if="addNewItem" :openedFrom="isWhere" @closeAddItem="closeAddItem" />
      <div class="main-top">
        <h1 class="header-title">Объекты искусства</h1>
        <button class="item-page__edit" @click.prevent="showAddItem">Добавить объект</button>
      </div>
      <Selector :options="allCategories" :selected="''" @selectedOption="sortByCategory" />
      <div class="menu">
        <MenuItem :itemsArr="filteredItems" />
      </div>
    </div>
  </main>
</template>

<script>
  import MenuItem from '../components/Menu-item.vue';
  import AddItem from '../components/AddItem.vue';
  import Selector from '../components/Selector.vue';
  import { mapGetters } from 'vuex';
  export default {
    name: 'App',
    components: {
      MenuItem,
      AddItem,
      Selector,
    },
    data: () => {
      return {
        addNewItem: false,
        isWhere: 'main',
        sortedItems: [],
      };
    },
    methods: {
      closeAddItem() {
        this.addNewItem = false;
      },
      showAddItem() {
        this.addNewItem = true;
      },
      sortByCategory(category) {
        this.sortedItems = [];
        let vm = this;
        this.allItems.map((item) => {
          if (item.classification_title == category) {
            vm.sortedItems.push(item);
          }
        });
      },
    },
    computed: {
      ...mapGetters(['allItems', 'allCategories']),
      filteredItems() {
        if (this.sortedItems.length) {
          return this.sortedItems;
        } else {
          return this.allItems;
        }
      },
    },
  };
</script>
