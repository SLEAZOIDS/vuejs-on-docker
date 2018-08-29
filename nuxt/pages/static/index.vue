<template>
  <div>
    <div class="container">vue-chara-builder</div>
    <div class="block">
      <h4>Nuxt.js + Element？</h4>
      <el-rate v-model="value" :colors="['#2F3D4D', '#64B486', '#4B7C6E']"></el-rate>
    </div>
    <no-ssr>
      <vue-typer text='Hello World! I was registered locally!'></vue-typer>
    </no-ssr>
    <br>
    <br>
    <br>
    <no-ssr>
      <vue-chara-builder message="Vue Component: You can generate sentence, as if it is building now."/>
    </no-ssr>
    <no-ssr>
      <vue-chara-builder message="ビューキャラビルダーはまるで文章を現在進行形構築するように生成します"/>
    </no-ssr>
  </div>
</template>

<script>
export default {
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
