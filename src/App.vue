<script setup>
  import v_header from './components/header.vue'
  import v_footer from './components/footer.vue'



</script>

<template>
  <header>
    <title>Home</title>
  </header>

<body>
  <v_header />

  <router-view></router-view>

  <v_footer />
</body>
</template>


