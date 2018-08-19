const axios = require("axios");

const functions = {
  add: (a, b) => a + b,
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.data)
      .catch(err => console.log("error"))
};

module.exports = functions;
