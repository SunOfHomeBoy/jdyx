<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>

<script>
  export default {
    name: '',
    componentName: '',
    props: {},
    data: function () {
      return {}
    },
    created() {
    },
    methods: {},
    computed: {},
    watch: {},
  };
</script>

<style>
  .over {
    overflow: auto;
  }
</style>