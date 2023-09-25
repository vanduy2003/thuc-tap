import React,{useState} from "react";
import styles from "../../App.css";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

function UpdateItem() {
    const { id } = useParams();
    const { state } = useLocation();
    const data = state.data;

    const [updateUser, setUpdateUser] = useState({
        id : data.id,
        email: data.email,
        firstName: data.first_name,
        lastName: data.last_name,
    });

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setUpdateUser({
            ...updateUser,
            [name]: value
        })
    }
    const updateData = (id) =>{
        axios.put(`https://reqres.in/api/users/${id}`, updateUser).then((response) => {
            
        var update = {
          id: response.data.id,
          email: response.data.email,
          firstName: response.data.first_name,
          lastName: response.data.last_name
        };
        setUpdateUser(update);
        alert("sửa thành công");
      
    })
    .catch((error) => {
      console.log(error);
      alert("sửa thất bại do:" +error);
    });
    }
    return(
      <div className="update-data">
        <h2>SỬA</h2>
          <form className="updateForm">
            <label>ID:</label>
            <input type="number" className="idUpdate" name="id" value={updateUser.id} onChange={handleChange}></input>
            <label>EMAIL:</label>
            <input type="email" className="emailUpdate" name="email" value={updateUser.email} onChange={handleChange}></input>
            <label>FIRST NAME:</label>
            <input type="text" className="fisrtNameUpdate" name="firstName" value={updateUser.firstName} onChange={handleChange}></input>
            <label>LAST NAME:</label>
            <input type="text" className="lastNameUpdate" name="lastName" value={updateUser.lastName} onChange={handleChange}></input>
            <button type="button" className="updateSubmit" onClick={()=>updateData(data.id)}>SỬA</button>
          </form>
      </div>
    )
}


export default  UpdateItem;
