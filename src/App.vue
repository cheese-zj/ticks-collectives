<template>
  <div id="app">
    <div class="button-container">
      <circle-button
        v-for="(button, index) in buttons"
        :key="index"
        :color="button.color"
        :text="button.text"
        :size="button.size"
        :y-offset="button.yOffset"
        @clicked="() => buttonClicked(index)"
      />

    </div>
    <!-- New Section Under Buttons -->
    <div class="new-section">
      <CylinderComp
        v-for="(button, index) in buttons"
        :key="`cylinder-${index}`"
        :color="button.color"
        :height="button.height"
      />
    </div>
  </div>

  
</template>


<script>
import CircleButton from './components/CircleButton.vue';
import CylinderComp from './components/CylinderComp.vue';

export default {
  name: 'App',
  components: {
    CircleButton,
    CylinderComp
  },
  data() {
    return {
      buttons: [
        { color: '#3498db', text: '📚', size: '380px', yOffset: '-20px', height: 20 },
        { color: '#e74c3c', text: '🏋️', size: '300px', yOffset: '100px', height: 20 },
        { color: '#2ecc71', text: '🧘', size: '350px', yOffset: '-30px', height: 20 },
        { color: '#ffe852', text: '🥣', size: '335px', yOffset: '50px', height: 20 }
      ],
    };
  },
  methods: {
    buttonClicked(index) {
      // alert(`Button ${index} clicked!`);
      this.buttons[index].height += 15;
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column; /* Align children vertically */
  justify-content: center; /* Center children vertically, if desired */
  align-items: center; /* Center children horizontally */
  min-height: 170vh; /* Adjust or remove according to your design needs */
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
}

.circle-button:nth-child(2) {
  z-index: 3;
}

.circle-button:nth-child(3) {
  z-index: 2;
}

.circle-button:nth-child(4) {
  z-index: 1;
}

.new-section {
  display: flex;
  justify-content: space-around; /* Distributes items evenly */
  flex-wrap: wrap; /* Allows items to wrap onto multiple lines if needed */
}

.cylinder-container {
  margin: 100px; /* Adds space between cylinders */
  width: 80px; /* Or another appropriate width */
  /* Ensure the container's width is enough to include the cylinder and its 3D effect */
}

/* Add similar rules for more buttons if necessary */
</style>
