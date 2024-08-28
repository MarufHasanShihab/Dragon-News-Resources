
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDilCwM6h3XGRa4zwyvbTQNYw9_oJO-JTQ",
  authDomain: "dragon-news-resources-73e2c.firebaseapp.com",
  projectId: "dragon-news-resources-73e2c",
  storageBucket: "dragon-news-resources-73e2c.appspot.com",
  messagingSenderId: "39677739687",
  appId: "1:39677739687:web:28328b06398d182e075182"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth