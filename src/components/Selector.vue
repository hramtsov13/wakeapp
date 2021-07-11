<template>
  <div class="selector">
    <h2 class="selector__header">Категории:</h2>
    <nav class="selector__options">
      <p
        class="selector__options-option"
        v-for="(option, i) in options"
        :key="option.value"
        :class="{ active: i == isActive }"
        @click.prevent="selectOption(option, i)"
      >
        {{ option }}
      </p>
    </nav>
  </div>
</template>

<style lang="less" scoped>
  .selector {
    padding: 10px 0;
    margin: 20px 0;
    margin-top: 0px;
    border-top: 1px solid rgba(220, 20, 60, 0.349);
    border-bottom: 1px solid rgba(220, 20, 60, 0.349);
    &__header {
      font-size: 16px;
      line-height: 18px;
      margin-bottom: 10px;
    }
  }
  .selector__options {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &-option {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: capitalize;
      margin-bottom: 10px;
      margin-right: 10px;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      border: 1px solid crimson;
      background-color: #fff;
      transition: 0.3s all;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        background-color: crimson;
        color: #fff;
      }
    }
  }
  .active {
    background-color: crimson;
    color: #fff;
  }
</style>

<script>
  export default {
    name: 'selector',
    data: () => {
      return {
        isActive: 0,
      };
    },
    methods: {
      selectOption(option, i) {
        this.$emit('selectedOption', option);
        this.isActive = i;
      },
    },
    props: {
      options: {
        default() {
          return [];
        },
        type: Array,
      },
    },
  };
</script>
