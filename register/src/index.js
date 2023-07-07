const axios = require("axios");

addEventListener('submit', function(event) {
    event.preventDefault(); 
  
  
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
   var data = {
      username: username,
      email: email,
      password: password
    };
  
  
    axios.post('https://funny-movies-server.vercel.app/funny-api/register', data)
      .then(function(response) {
        console.log(response.data); 
      })
      .catch(function(error) {
        console.log(error); 
     });
  });