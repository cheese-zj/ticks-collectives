<template>
  <div id="app">
    <div class="menu-bar">
      <menuBar />
    </div>
    <div class="quarter-circle"></div>
    <div class="profile-picture"
      :style="{ backgroundImage: `url(${profilePicUrl})`, }"
      @click="handleProfilePictureClick"></div>
      <button @click="openSettings" class="settings-button">⚙️</button>
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
import menuBar from './components/menuBar.vue';
import { signInWithGoogle} from './firebase/index.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import profilePic from '@/assets/logo.png';
//import { ElMessage, ElMessageBox, Action } from 'element-plus';


export default {
  name: 'App',
  components: {
    CircleButton,
    CylinderComp,
    menuBar,
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
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, update the profile picture URL
        this.profilePicUrl = user.photoURL || this.profilePicUrl; // Use user.photoURL or keep the default
      }
    });
  },
  methods: {
    buttonClicked(index) {
      this.buttons[index].height += 20;
    },
    handleProfilePictureClick() {
      signInWithGoogle().then((result) => {
        // The signed-in user info.
        const user = result.user;
        // Here, you might want to do something with the user information or token, like updating the user's profile picture or displaying a welcome message.
        console.log(user);
        if (user.photoURL) {
          // Update the profile picture URL with the user's photo URL
          this.profilePicUrl = user.photoURL; // For Options API
          // profilePicUrl.value = user.photoURL; // For Composition API, uncomment this line
        }
      }).catch((error) => {
        // Handle errors here, such as showing an error message to the user.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error ${errorCode}: ${errorMessage}`);
      }).catch((error) => {
        console.error("Error signing in with Google:", error);
      });
    },
    openSettings() {
      console.log('Settings opened');

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
  width: 160px;
  height: 160px;
  background-color: grey;
  border-radius: 0 0 0 200px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  z-index: 1000;
}

.profile-picture {
  position: fixed;
  top: 20px;
  right: 60px;
  width: 100px;
  height: 100px;
  background-color: white;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  z-index: 1010;
}

.settings-button {
  position: fixed;
  top: 20px;
  right: 10px;
  cursor: pointer;
  z-index: 1011;
  font-size: 30px;
  background-color: darkcyan;
  border: 2px solid white;
  outline: none;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);

}
</style>
