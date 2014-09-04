function logIn() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  //store data using method
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  alert ("data is saved as " + username + " " + password);
}

function showStorageData() {
  var storedUsername = localStorage.getItem('username');
  var storedPassword = localStorage.getItem('password');
  document.write(storedUsername + " " + storedPassword);
}
