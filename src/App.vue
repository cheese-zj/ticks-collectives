<template>
  <div id="app">
    <div class="quarter-circle"></div>
    <div class="profile-picture" :style="{ backgroundImage: `url(${profilePicUrl})` }"></div>
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
import profilePic from '@/assets/logo.png';

export default {
  name: 'App',
  components: {
    CircleButton,
    CylinderComp,
  },
  data() {
    return {
      buttons: [
        { color: '#3498db', text: '📚', size: `${380 * window.innerWidth / 1300}px`, yOffset: '-20px', height: 20 },
        { color: '#e74c3c', text: '🏋️', size: `${300 * window.innerWidth / 1300}px`, yOffset: '100px', height: 20 },
        { color: '#2ecc71', text: '🧘', size: `${350 * window.innerWidth / 1300}px`, yOffset: '-30px', height: 20 },
        { color: '#ffe852', text: '🥣', size: `${335 * window.innerWidth / 1300}px`, yOffset: '50px', height: 20 }
      ],
      profilePicUrl: profilePic,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };
  },
  methods: {
    buttonClicked(index) {
      this.buttons[index].height += 20;
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 100px;
}

.circle-button {
  margin-left: -30px;
  position: relative;
  z-index: 1;
  transition: transform 0.3s;
}

.circle-button:first-child {
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  margin-left: 0;
  z-index: 4;
}

.circle-button:nth-child(2) {
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  z-index: 3;
}

.circle-button:nth-child(3) {
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  z-index: 2;
}

.circle-button:nth-child(4) {
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  z-index: 1;
}

.new-section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.cylinder-container {
  margin: 100px;
  width: 100px;
}

.quarter-circle {
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  height: 200px;
  background-color: grey;
  border-radius: 0 0 0 200px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  z-index: 1000;
}

.profile-picture {
  position: fixed;
  top: 30px;
  right: 80px;
  width: 120px;
  height: 120px;
  background-color: white;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  z-index: 1010;
}

</style>
