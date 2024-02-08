<template>
  <button class="circle-button" @click="clickHandler" :style="{ backgroundColor: color, width: size, height: size }">
  {{ text }}
  </button>
</template>

<script>
export default {
  name: 'CircleButton',
  props: {
    color: String,
    text: String, // Add this line
    size: String
  },
  methods: {
    clickHandler() {
      this.$emit('clicked', this.color);
    }
  }
}
</script>
  
  <style scoped>
  .circle-button {
    border: none;
    border-radius: 50%;
    width: 350px;
    height: 350px;
    color: white;
    font-size: 120px;
    cursor: pointer;
    outline: none;
  }
  </style>
  