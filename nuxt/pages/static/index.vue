<template>
  <div class="container">stacic test page</div>
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
  }
}
</script>
