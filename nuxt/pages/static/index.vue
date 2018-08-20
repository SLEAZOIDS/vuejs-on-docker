<template>
  <div>
    <div class="container">stacic test page</div>
    <div class="block">
      <h4>Nuxt.js + Element？</h4>
      <el-rate v-model="value" :colors="['#2F3D4D', '#64B486', '#4B7C6E']"></el-rate>
    </div>
    <no-ssr>
      <vue-typer text='Hello World! I was registered locally!'></vue-typer>
    </no-ssr>
    <bounce message="Hello world!"/>
  </div>
</template>

<script>
import Bounce from '~/components/Bounce.vue'

export default {
  components: {
    Bounce
  },
  head () {
    return {
      script: [
        { src: "/sample.js" }
      ],
      link: [
        { rel: 'stylesheet', href: "/sample.css" }
      ]
    }
  },
  data () {
    return {
      value: null
    }
  }
}
</script>
