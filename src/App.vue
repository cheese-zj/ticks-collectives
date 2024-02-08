<template>
  <div id="app">
    <div class="button-container">
      <circle-button
        v-for="(button, index) in buttons"
        :key="index"
        :color="button.color"
        :text="button.text"
        :size="button.size"
        @clicked="buttonClicked"
      />
    </div>
  </div>
</template>


<script>
import CircleButton from './components/CircleButton.vue';

export default {
  name: 'App',
  components: {
    CircleButton
  },
  data() {
    return {
      buttons: [
        { color: '#3498db', text: '📚', size: '350px' },
        { color: '#e74c3c', text: '🏋️', size: '300px' },
        { color: '#2ecc71', text: '🧘', size: '350px' },
        { color: '#ffe852', text: '🥣', size: '335px' }
      ]
    };
  },
  methods: {
    buttonClicked(color) {
      alert(`Button with color ${color} clicked!`);
    }
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.button-container {
  display: flex;
  position: relative; /* Keeps existing positioning context */
}

.circle-button {
  margin-left: -30px; /* Adjust for overlap */
  position: relative; /* Necessary for z-index and transform adjustments */
  z-index: 1; /* Ensure buttons stack correctly */
  transition: transform 0.3s; /* Smooth transition for hover effect */
}

.circle-button:first-child {
  margin-left: 0; /* No overlap for the first button */
  z-index: 4; /* Higher z-index for stack order */
  transform: translateY(-10px); /* Adjust y-axis position */
}

.circle-button:nth-child(2) {
  z-index: 3;
  transform: translateY(5px); /* Adjust y-axis position */
}

.circle-button:nth-child(3) {
  z-index: 2;
  transform: translateY(-15px); /* Adjust y-axis position */
}

.circle-button:nth-child(4) {
  z-index: 1;
  transform: translateY(20px); /* Adjust y-axis position */
}

/* Add similar rules for more buttons if necessary */
</style>
