import firebase from 'firebase/app';
import 'firebase/firestore'; // 如果你使用Firestore
// 添加其他Firebase服务，如firebase/auth

const firebaseConfig = {
  // 你的Firebase项目配置
};

// 初始化Firebase
firebase.initializeApp(firebaseConfig);

// 导出Firebase服务，例如Firestore数据库实例
export const db = firebase.firestore();
