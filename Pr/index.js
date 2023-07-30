import axios from "axios";

function clickMe() {
  axios.get("https://dummy.restapiexample.com/api/v1/employees").then((response) => {
    console.log("====================================");
    console.log(response);
    console.log("====================================");
  });
}

export default clickMe;