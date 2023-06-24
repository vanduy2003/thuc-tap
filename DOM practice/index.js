import axios from "axios";

function clickMe() {
  axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
    console.log("====================================");
    console.log(response);
    console.log("====================================");
  });
}

export default clickMe;
