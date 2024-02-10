// src/firebase/index.js
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);

export default app;
