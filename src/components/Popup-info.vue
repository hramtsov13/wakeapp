<template>
  <transition name="popup">
    <section id="modal" class="modal-popup" ref="popup_wrapper">
      <div class="popup catalog-popup">
        <div class="sms-form" id="login-form">
          <h2 class="popup-info__header">{{ popupInfoHeader }}</h2>
          <div class="sms-form__item">
            <slot> </slot>
          </div>
          <!-- <div v-for="error in errors" :key="error" class="sms-form__item">
            {{ error }}
          </div> -->
          <button id="modal-ok-button" class="button modal-ok-button" @click="closePopupInfo()">
            Спасибо
          </button>
        </div>
      </div>
    </section>
  </transition>
</template>

<style scoped>
  .popup-enter-active {
    opacity: 0;
    animation: 8s fade forwards;
    animation: 2.5s transformation forwards;
  }

  .popup-enter,
  .popup-leave-to {
    opacity: 0;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes transformation {
    from {
      transform: translateY(109px);
    }
    to {
      transform: translateY(0px);
    }
  }
</style>

<script>
  export default {
    methods: {
      closePopupInfo() {
        this.$emit('closePopupInfo');
      },
      showPopupInfo() {
        this.$emit('showPopupInfo', this.errors);
      },
    },

    props: {
      popupInfoHeader: {
        type: String,
        default: 'Внимание',
      },
    },

    mounted() {
      let vm = this;
      document.addEventListener('click', function(item) {
        if (item.target === vm.$refs['popup_wrapper']) {
          vm.closePopupInfo();
        }
      });
    },
  };
</script>
