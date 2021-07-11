<template>
  <div class="loader-wrapper" :class="{ show: isLoader }">
    <div class="loader"></div>
  </div>
</template>

<script>
  export default {
    name: 'Loader',

    props: {
      isLoader: {
        default: false,
        type: Boolean,
      },
    },
  };
</script>

<style scoped>
  .loader-wrapper {
    display: none;
    position: fixed;
    top: 50%;
    transform: translateY(-10%);
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    z-index: 333;
  }
  .loader {
    /* display: none; */

    overflow: hidden;
    font-size: 10px;
    margin: 50px auto;
    text-indent: -9999em;
    width: 11em;
    height: 11em;
    border-radius: 50%;
    background: #65abf8;
    background: -moz-linear-gradient(left, crimson 10%, rgba(101, 171, 248, 0) 42%);
    background: -webkit-linear-gradient(left, crimson 10%, rgba(101, 171, 248, 0) 42%);
    background: -o-linear-gradient(left, crimson 10%, rgba(101, 171, 248, 0) 42%);
    background: -ms-linear-gradient(left, crimson 10%, rgba(101, 171, 248, 0) 42%);
    background: linear-gradient(to right, crimson 10%, rgba(101, 171, 248, 0) 42%);
    position: relative;
    -webkit-animation: load3 1.4s infinite linear;
    animation: load3 1.4s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .loader:before {
    width: 50%;
    height: 50%;
    background: crimson;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  .loader:after {
    background: white;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
