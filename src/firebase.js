import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHnykJbD9gFxElqpZ5WIovZWElVvL3K4w",
  authDomain: "clone-472f7.firebaseapp.com",
  databaseURL: "https://clone-472f7.firebaseio.com",
  projectId: "clone-472f7",
  storageBucket: "clone-472f7.appspot.com",
  messagingSenderId: "188765617964",
  appId: "1:188765617964:web:f7c399d3ad0984af773689",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
