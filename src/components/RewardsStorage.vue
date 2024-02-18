<template>
    <div class="rewards-storage">
    <div class="box" v-for="index in totalBoxes" :key="index"
         :style="itemStyle(index)">
      <div class="item-text">{{ itemText(index) }}</div>
    </div>
  </div>
  </template>
  
  <script> 
  //import logoImage from '@/assets/brush_blue.png';
    import { db } from '../firebase/index.js';
    import { doc, setDoc } from "firebase/firestore";
    export default {
        name: 'RewardsStorage',
        // Add your script here if needed
        data() {
            return {
                // Example items array
                items: [
                ],
            };
        },
        computed: {
            totalBoxes() {
                // Always show at least the minimum number of boxes
                return (Math.floor(this.items.length / 5)+1)*5;
            }
        },
        methods: {
            itemStyle(index) {
                const item = this.items[index - 1]; // Arrays are zero-indexed
                return item ? { backgroundImage: `url(${item.imageUrl})` } : {};
            },
            itemText(index) {
                const item = this.items[index - 1]; // Arrays are zero-indexed
                return item ? item.text : '';
            },
            async addItem(newItem, uid) {
                // Add the new item to the local items array
                this.items.push(newItem);
                // Save the updated items array to the current user's document
                try {
                    const addr = 'userData/' + uid + '/collection/rewards';
                    const userDocRef = doc(db, addr);
                await setDoc(userDocRef, {
                    items: this.items,
                });
                    console.log("Items updated successfully");
                } catch (error) {
                    console.error("Error updating items: ", error);
                }
            }
        }
    }
  </script>
  
  <style scoped>
  .rewards-storage {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Adjust the number for different matrix sizes */
    gap: 10px; /* Space between boxes */
  }
  
  .box {
    list-style-type: none;
    width: 150px; /* Size of boxes */
    height: 150px; /* Size of boxes */
    background-color: lightgray; /* Color of boxes */
    border-radius: 100px; /* Optional: for rounded corners */
  }

  @media (min-width: 480px) { /* Adjust for small devices */
  .rewards-storage {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
}

/* Media queries for different screen widths */
@media (min-width: 480px) { /* Small devices (landscape phones, 480px and up) */
  .rewards-storage {
    grid-template-columns: repeat(3, 1fr); /* Adjust to three columns */
  }
}

@media (min-width: 768px) { /* Medium devices (tablets, 768px and up) */
  .rewards-storage {
    grid-template-columns: repeat(4, 1fr); /* Adjust to four columns */
  }
}

@media (min-width: 1024px) { /* Large devices (desktops, 1024px and up) */
  .rewards-storage {
    grid-template-columns: repeat(5, 1fr); /* Adjust to five columns */
  }
}

@media (min-width: 1440px) { /* Extra large devices (large desktops, 1440px and up) */
  .rewards-storage {
    grid-template-columns: repeat(6, 1fr); /* Adjust to six columns */
  }
}
</style>
  