<template>
  <div class="modal-popup" ref="popup_wrapper">
    <form @submit.prevent="submit()" class="popup form">
      <h3 class="form-header">Введите данные</h3>
      <div class="form-wrapper">
        <div class="form-wrapper__block">
          <input type="text" name="" id="" placeholder="Название картины*" v-model="title" required />
          <input type="text" name="" id="" placeholder="Ссылка на изображение*" v-model="imageSrc" required />
          <input type="text" name="" id="" placeholder="Имя автора" v-model="artistName" />
          <input type="text" name="" id="" placeholder="Размер полотна" v-model="size" />
        </div>
        <div class="form-wrapper__block">
          <input type="text" name="" id="" placeholder="Дата создания" v-model="date" />
          <input type="text" name="" id="" placeholder="Место создания" v-model="place" />
          <input type="text" name="" id="" placeholder="История" v-model="history" />
        </div>
      </div>
      <button type="submit">{{ this.buttonText }}</button>
    </form>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    data() {
      return {
        title: '',
        imageSrc: '',
        artistName: '',
        size: '',
        date: '',
        place: '',
        history: '',
        buttonText: 'Добавить',
      };
    },
    methods: {
      ...mapMutations(['createItem', 'changeItem']),
      submit() {
        if (this.openedFrom == 'main') {
          this.createItem({
            title: this.title,
            url: this.imageSrc,
            id: Date.now(),
            artist_display: this.artistName,
            dimensions: this.size,
            date_display: this.date,
            place_of_origin: this.place,
            publication_history: this.history,
          });
          this.title = this.imageSrc = this.id = this.artistName = this.size = this.date = this.place = this.history =
            '';
          this.closeAddItem();
        } else if (this.openedFrom == 'item-page') {
          //меняем данные полученного из props объекта => заменяем старый на новый во Vuex
          this.itemToEdit.title = this.title;
          this.itemToEdit.url = this.imageSrc;
          this.itemToEdit.artist_display = this.artistName;
          this.itemToEdit.dimensions = this.size;
          this.itemToEdit.date_display = this.date;
          this.itemToEdit.place_of_origin = this.place;
          this.itemToEdit.publication_history = this.history;
          this.changeItem(this.itemToEdit);
          this.title = this.imageSrc = this.id = this.artistName = this.size = this.date = this.place = this.history =
            '';
          this.closeAddItem();
        }
      },
      closeAddItem() {
        this.$emit('closeAddItem');
      },
    },
    props: {
      itemToEdit: {
        default: () => {},
        type: Object,
      },
      openedFrom: {
        default: '',
        type: String,
      },
    },
    mounted() {
      let vm = this;
      document.addEventListener('click', function(item) {
        if (item.target === vm.$refs['popup_wrapper']) {
          vm.closeAddItem();
        }
      });
      if (this.openedFrom == 'item-page') {
        this.buttonText = 'Редактировать';
        this.title = this.itemToEdit.title;
        this.size = this.itemToEdit.dimensions;
        this.imageSrc = this.itemToEdit.url;
        this.artistName = this.itemToEdit.artist_display;
        this.date = this.itemToEdit.date_display;
        this.place = this.itemToEdit.place_of_origin;
        this.history = this.itemToEdit.publication_history;
      }
    },
  };
</script>

<style scoped>
  form {
    margin-bottom: 30px;
  }

  .form-wrapper {
    display: block;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
  }

  .form-wrapper__block {
    flex-grow: 1;
  }
  input {
    min-width: 48%;
    display: block;
    width: 100%;
    border: 1px solid crimson;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }
  button {
    display: block;
    margin: 0 auto;
    border: 1px solid crimson;
    background-color: #fff;
    color: crimson;
    font-size: 16px;
    line-height: 18px;
    cursor: pointer;
    transition: 0.3s all;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  button:hover {
    color: #fff;
    background-color: crimson;
  }
</style>
