<template>
  <div>
    <button @click="show = !show">Toggle show</button>
    <transition name="bounce">
      <p v-if="show">{{ view_message }}</p>
    </transition>
    <button v-on:click="timer">imitator</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      message: 'Hello World! I was registered locally!',
      view_message: '',
      index: 0
    }
  },
  methods: {
    discript: function () {
      var array = this.message.split('')
      if(typeof array[this.index] ==='undefined') {
        this.view_message = ''
        this.index = 0
      }
      this.view_message += array[this.index]
      this.index++
    },

    timer: function() {
      let self = this;
      setInterval(function() {self.discript()}, 100)
    }
  }
}
</script>

<style>

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>
