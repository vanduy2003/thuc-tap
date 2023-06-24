import axios from "axios";

function clickMe() {
  axios.get("https://docs.google.com/spreadsheets/d/1rCoaE4pJ_YqwIxreaiorsXZ-vHpnXIc4ZuTFPQLIM-s/edit#gid=605631722").then((response) => {
    console.log("====================================");
    console.log(response);
    console.log("====================================");
  });
}

export default clickMe;