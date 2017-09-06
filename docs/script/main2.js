 function initApp() {
		
	  var config = {
		apiKey: "AIzaSyCcLhd9tz_l6-hR_t1WdAxgb4NAoMbvME0",
		authDomain: "friendlychat-21442.firebaseapp.com",
		databaseURL: "https://friendlychat-21442.firebaseio.com",
		projectId: "friendlychat-21442",
		storageBucket: "friendlychat-21442.appspot.com",
		messagingSenderId: "343469521635"
	  };
	  firebase.initializeApp(config);
         
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
	        alert('funcion para ver status de usuario');
      
    }
}

  
    window.onload = function() {
      initApp();
    };
  
