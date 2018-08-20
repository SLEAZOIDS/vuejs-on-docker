<template>
  <div>
    <p>{{ view_message }}</p>
    <button v-on:click="start">start</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      view_message: '',
    }
  },
  props: ['message'],
  methods: {
    discript: function () {
      var index = Math.floor(Math.random() * this.message_array.length)

      var character = this.message_array[index]
      this.message_array.splice(index, 1);

      this.view_message = this.view_message.slice(0, character.index) + character.value
        + this.view_message.slice(character.index + 1, this.view_message.length);

      if(this.message_array.length <= 0) {
        this.stop()
      }
    },

    start: function() {
      if (!this.message) {
        return
      }
      this.message_array = [...this.message]
      this.message_array = this.message_array.map(function(value, index) {
          return {value:value, index:index};
      });

      this.view_message = ''
      for (var i = 0; i < this.message.length; i++) {
        this.view_message += ' '
      }
      this.index = 0
      let self = this
      this.timerObj = setInterval(function() {
        self.discript()
      }, 50)
    },

    stop: function() {
      clearInterval(this.timerObj);
    },
  }
}
</script>
