<template>
  <div class="body">
    <div class="container">
      <div class="item-page">
        <div class="item-page__wrapper">
          <div class="main-top">
            <h1 class="item-page__header">{{ this.clickedObject.title }}</h1>
            <button class="item-page__edit" @click.prevent="showAddItem">Редактировать данные</button>
          </div>
        </div>
        <div class="art-item">
          <div class="art-item-picture">
            <img :src="clickedObject.url" :alt="clickedObject.title" />
          </div>
          <div class="art-item-info">
            <h2 class="art-item-info__block art-item-info__author">
              <span>Автор: </span> {{ this.clickedObject.artist_display }}
            </h2>
            <p class="art-item-info__block art-item-info__dimensions">
              <span>Размер полотна: </span> {{ this.clickedObject.dimensions }}
            </p>
            <p class="art-item-info__block art-item-info__year">
              <span>Дата создания: </span> {{ this.clickedObject.date_display }}
            </p>
            <p class="art-item-info__block art-item-info__year">
              <span>Место создания: </span> {{ this.clickedObject.place_of_origin }}
            </p>
          </div>
        </div>
        <div class="art-item__publications" v-if="this.clickedObject.publication_history != null">
          <p class="art-item-info__block" v-html="checkString(this.clickedObject.publication_history)">
            <span>История выставок: </span>
          </p>
        </div>
      </div>
      <AddItem v-if="addNewItem" :openedFrom="isWhere" @closeAddItem="closeAddItem" :itemToEdit="this.clickedObject" />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import AddItem from '../components/AddItem.vue';
  export default {
    data: () => {
      return {
        clickedObject: {},
        addNewItem: false,
        isWhere: 'item-page',
      };
    },
    components: {
      AddItem,
    },
    computed: mapGetters(['allItems']),

    methods: {
      checkString(str) {
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');
      },
      closeAddItem() {
        this.addNewItem = false;
      },
      showAddItem() {
        this.addNewItem = true;
      },
    },
    mounted() {
      let id = this.$route.params.id;
      this.allItems.forEach((element) => {
        if (id == element.id) {
          this.clickedObject = element;
        }
      });
    },
  };
</script>
