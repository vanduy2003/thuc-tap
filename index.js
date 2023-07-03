import axios from "axios";

function clickMe() {
  axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
    console.log("====================================");
    console.log(response);
    console.log("====================================");
  });
}

export default clickMe;
