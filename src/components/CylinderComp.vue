<template>
    <div class="cylinder-container">
      <div class="cylinder-top" :style="{ backgroundColor: color }"></div>
      <div class="cylinder-body" :style="{ height: height + 'px', backgroundColor: color }"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CylinderComp',
    props: {
      color: String,
      height: Number,
    },
  }
  </script>
  
  <style scoped>
  .cylinder-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .cylinder-top {
    width: 100px; /* Adjust based on your design */
    height: 10px; /* Represents the top circle of the cylinder */
    border-radius: 30px 30px 0 0;
    background-color: #3498db; /* Default color, will be overridden by prop */
  }
  
  .cylinder-body {
    width: 100px; /* Match the top circle width */
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
  </style>
  