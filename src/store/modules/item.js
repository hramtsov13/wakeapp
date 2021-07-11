import axios from 'axios';

export default {
  state: {
    items: [],
    categories: [],
    errors: [],
  },
  mutations: {
    updateItems(state, items) {
      state.items = items;
    },
    updateCategories(state, categories) {
      state.categories = categories;
    },

    updateErrors(state, errors) {
      state.errors = errors;
    },
    createItem(state, newItem) {
      //Добавление нового объекта
      state.items.unshift(newItem);
    },

    changeItem(state, changedItem) {
      //Ищем индекс, по нему производим замену
      let index = state.items.findIndex((item) => item.id == changedItem.id);
      state.items.splice(index, 1, changedItem);
    },

    deleteItem(state, itemToDelete) {
      //Удаление объекта
      let index = state.items.findIndex((item) => item.id == itemToDelete.id);
      state.items.splice(index, 1);
    },
  },
  actions: {
    async fetchItems(context, error) {
      //Запрашиваем апи с картинами
      try {
        const response = await axios.get(`https://api.artic.edu/api/v1/artworks?limit=20`);
        const items = await response.data.data;
        const categories = ['Показать все'];
        //Модифицируем объекты, чтобы в каждом был ключ url, в который положим ссылку на само изображение, так как в API есть только инф-ия, а картинок нет
        items.forEach((element) => {
          element.url = 'https://www.artic.edu/iiif/2/' + element.image_id + '/full/200,/0/default.jpg';
          let categoryName = element.classification_title;
          categories.push(categoryName);
        });

        context.commit('updateCategories', categories);
        context.commit('updateItems', items);
      } catch (error) {
        let errors = [];
        errors.push(error);
        context.commit('updateErrors', errors);
        throw new Error(`Ошибка ${error}`);
      }
    },
  },
  getters: {
    allItems(state) {
      return state.items.filter((p) => {
        //Нельзя добавить с пустыми полями, хотя бы указать название и урл
        return p.title && p.url;
      });
    },
    allCategories(state) {
      //Возвращает отфильтрованный от повторяющихся значений массив
      return Array.from(new Set(state.categories));
    },
    allErrors(state) {
      //Ошибка
      return state.errors;
    },
  },
};
