<template>
  <div>
    <Header />
    <router-view @showLoader="showLoader" @hideLoader="hideLoader" @showPopupInfo="showPopupInfo" />
    <Loader :isLoader="this.isLoaderShowing" />
    <Navbar />
    <Popup v-if="isPopup" @closePopupInfo="closePopupInfo">
      {{ this.allErrors[0].message }}
    </Popup>
  </div>
</template>

<script>
  import Header from '../components/Header.vue';
  import Navbar from '../components/Navbar.vue';
  import Loader from '../components/Loader.vue';
  import Popup from '../components/Popup-info.vue';
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name: 'page-layout',
    data: () => ({
      isLoaderShowing: false,
      isPopup: false,
      reload: 1,
    }),
    components: {
      Header,
      Navbar,
      Loader,
      Popup,
    },
    methods: {
      showLoader(option) {
        this.isLoaderShowing = option;
      },
      hideLoader(option) {
        this.isLoaderShowing = option;
      },
      closePopupInfo() {
        this.isPopup = false;
      },
      showPopupInfo() {
        this.isPopup = true;
      },
    },

    computed: {
      ...mapActions(['fetchItems']),
      ...mapGetters(['allErrors']),
    },

    mounted() {
      this.isLoaderShowing = true;
      this.fetchItems;
      setTimeout(() => {
        this.isLoaderShowing = false;
        if (this.allErrors != '') {
          this.showPopupInfo();
        }
      }, 700);
    },
  };
</script>
