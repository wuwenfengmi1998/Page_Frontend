<script>
  import v_header from './components/header.vue'
  import v_footer from './components/footer.vue'
  export default{
    components:{
      v_header,v_footer
    }
  }
</script>

<template>


<body>
  <v_header></v_header>

  <router-view></router-view>

  <v_footer></v_footer>
</body>
</template>


