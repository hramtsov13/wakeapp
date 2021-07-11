<template>
  <div id="app">
    <component :is="layout"> </component>
  </div>
</template>

<script>
  import pageLayout from './layouts/pageLayout.vue';
  export default {
    name: 'App',
    computed: {
      layout() {
        return this.$route.meta.layout;
      },
    },
    components: {
      pageLayout,
    },
  };
</script>

<style lang="less">
  @import 'assets/styles.less';
</style>
