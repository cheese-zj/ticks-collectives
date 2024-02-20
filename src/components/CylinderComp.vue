<template>
    <div class="border-container">
        <div class="cylinder-container">
            <div class="cylinder-top" :style="{ backgroundColor: color }"></div>
            <div class="cylinder-body" :style="{ height: height + 'px', backgroundColor: color }"></div>
            <div class="battery-level" :style="{ height: batteryLevel + '%', backgroundColor: color }"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CylinderComp',
    props: {
        color: String,
        height: Number,
        batteryLevel: Number,
    },
}
</script>

<style scoped>
@keyframes waveAnimation {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
.cylinder-container {
  width: 100%; /* Fill the border container */
  height: 100%; /* Fill the border container */
  display: flex;
  justify-content: flex-end; /* Aligns the cylinder to the bottom */
  flex-direction: column;
  position: relative;
}

.cylinder-top {
    width: 60px; 
    height: 10px; /* Represents the top circle of the cylinder */
    border-radius: 30px 30px 0 0;
    background-color: #3498db; /* Default color, will be overridden by prop */
    
}

.cylinder-body {
    width: 60px; /* Match the top circle width */
    background-color: #3498db; /* Default color, will be overridden by prop */
    position: relative;
}

.cylinder-body::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 10px; /* Represents the bottom circle of the cylinder */
    border-radius: 0 0 25px 25px;
    background-color: inherit; /* Inherits the body color */
}
.border-container {
    width: 60px; /* Slightly larger to accommodate the border and gap */
    height: 110px; 
    padding: 9.5px; /* Creates the gap between the border and the cylinder */
    border: 5px solid grey; /* Grey border around the cylinder */
    border-radius: 20px; /* Rounded corners */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 100px 5px; /* Add margin to separate each border and increase the gap */
}

.cylinder-container::before {
  content: '';
  position: absolute;
  top: -21.5px; 
  left: 50%;
  transform: translateX(-50%); /* Center the notch */
  width: 20px; /* Width of the notch */
  height: 5px; /* Height of the notch */
  background-color: grey; /* Match the border color */
  border-radius: 3px 3px 3px 3px; /* Rounded bottom edges */
}

</style>
