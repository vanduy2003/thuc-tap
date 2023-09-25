import React, { useState, useEffect } from "react";
import axios from "axios";
import TableItem from "../table";
import styles from "../../App.css";
import { useNavigate  } from "react-router-dom";

function Home (){
    const [data, setData] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://reqres.in/api/users/")
      .then((response) => {
        var importData = response.data;
        setData(importData.data); // Gán dữ liệu nhận được từ API cho state data
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function addItem() {
    navigate ("/AddItem/");
    // alert("add");
    return
  }
    return(
        <div>
            <h1>this is Home page</h1>
            <div className='dataTable'>
              <div className="add-btn" onClick={()=>addItem()}>+</div>
        {
          data.map((item) => {
            return (
              <TableItem key={item.id} id={item.id} email={item.email} firstName={item.first_name} lastName={item.last_name}></TableItem>
            )
          })
        }
        </div>
        </div>
    )
}
export default Home;