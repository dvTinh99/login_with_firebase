import firebase from 'firebase'

const firebaseConfig = {
      //   apiKey: "AIzaSyALSNUVlp5QfFvbtB5qjCKK4tv3Z0xCImw",
      //   authDomain: "demologin-96344.firebaseapp.com",
      //   projectId: "demologin-96344",
      //   storageBucket: "demologin-96344.appspot.com",
      //   messagingSenderId: "162713581722",
      //   appId: "1:162713581722:web:99d53950bb0de7b501c723",
      //   measurementId: "G-VQNHZKETHD"
      apiKey: "AIzaSyDqhi5QONm_60xH3zJbXHy-FxqjdLJ660M",
      authDomain: "loginwithfire-27e3e.firebaseapp.com",
      databaseURL: "https://loginwithfire-27e3e-default-rtdb.firebaseio.com",
      projectId: "loginwithfire-27e3e",
      storageBucket: "loginwithfire-27e3e.appspot.com",
      messagingSenderId: "510783598040",
      appId: "1:510783598040:web:e293166ea3bb94603116ad",
      measurementId: "G-9031JYF8XB"
  };
  // Initialize Firebase
  const Firebase = firebase.initializeApp(firebaseConfig);

  export default Firebase ;