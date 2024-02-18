<template>
  <button
    class="circle-button"
    @click="clickHandler"
    @mouseenter="toggleHover(true)"
    @mouseleave="toggleHover(false)"
    :style="buttonStyle"
  >
    {{ text }}
  </button>
</template>


<script>
export default {
  name: 'CircleButton',
  props: {
    color: String,
    text: String,
    size: String,
    yOffset: String,
    height: Number,
    coeff: Number
  },
  data() {
    return {
      isHovering: false,
    };
  },
  methods: {
    clickHandler() {
      this.$emit('clicked', this.color);
    },
    toggleHover(state) {
      this.isHovering = state;
    },
  },
  computed: {
  buttonStyle() {
    const baseTransform = `translateY(${this.yOffset})`;
    const hoverTransform = `translateY(${this.yOffset}) scale(1.1)`;
    return {
      backgroundColor: this.color,
      width: this.size,
      height: this.size,
      transform: this.isHovering ? hoverTransform : baseTransform,
      transition: 'transform 0.35s ease',
    };
  },
}

}
</script>



  
<style scoped>
.circle-button {
  border: none;
  border-radius: 50%;
  width: 350px; /* Use CSS variable or direct binding */
  height: 350px; /* Use CSS variable or direct binding */
  color: white;
  font-size: 95px;
  cursor: pointer;
  outline: none;

}

.circle-button:hover {
  transform: translateY(var(--yOffset)) scale(1.1); /* Use the variable on hover */
}



</style>
  