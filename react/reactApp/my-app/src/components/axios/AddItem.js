import React, {useState, useEffect} from "react";
import axios from "axios";
import styles from "../../App.css";

function AddItem() {
  
    const [newUser, setNewUser] = useState({
        id : '',
        email: '',
        firstName: '',
        lastName: '',
    });

    //hàm handleChange để gán giá trị cho các ô input
    const handleChange = (event) =>{
        const {name, value} = event.target;
        setNewUser({
            ...newUser,
            [name]: value
        })

    }
    const addUser = () =>{
        axios.post("https://reqres.in/api/users/", newUser).then((response) => {
            
              var newData = {
                id: response.data.id,
                email: response.data.email,
                firstName: response.data.first_name,
                lastName: response.data.last_name
              };
              setNewUser(newData);
              alert("thêm thành công");
            
          })
          .catch((error) => {
            console.log(error);
            alert("thêm thất bại do:" +error);
          });
    }

return(
    <div>
        <h2>THÊM MỚI</h2>
        <form className="addForm">
        <label for="id" className="label">ID:</label><br />
        <input type="number" className="id-input" name="id" value={newUser.id} onChange={handleChange}></input><br />
        <label for="email" className="label">EMAIL:</label><br />
        <input type="email" className="email-input" name="email" value={newUser.email} onChange={handleChange}></input><br />
        <label for="firstName" className="label">FISRT NAME:</label><br />
        <input type="text" className="firstName-input" name="firstName" value={newUser.firsName} onChange={handleChange}></input><br />
        <label for="lastName" className="label">LAST NAME:</label><br />
        <input type="text" className="lastName-input" name="lastName" value={newUser.lastName} onChange={handleChange}></input><br />
        <button className="addSubmit" type="button" onClick={()=> addUser()}>Thêm</button>
        

        </form>

    </div>
)
}

export default AddItem;
