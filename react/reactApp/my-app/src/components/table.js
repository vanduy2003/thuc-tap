import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from '../App.css';
import ViewItem from "./axios/ViewItem";
import { useNavigate  } from "react-router-dom";
import UpdateItem from "./axios/UpdateItem";


function TableItem(props) {
  const [viewItem, setViewItem] = useState([]);
  const [updateItem, setUpdateItem] = useState([]);

  const styleObject = {
    backgroundColor: 'white',
    border: '1px solid black',
    float: 'left',
    width: '25%',
    textAlign: 'center' }

  // Thêm biến navigate
  const navigate = useNavigate();

  function deleteItem(id){
  axios.delete(`https://reqres.in/api/users/${id}`).then(function(response) {
    console.log(response.data);
      alert("xoá thành công!"); 
     }).catch(function(error) {
      alert(" lỗi:" + error);
      console.log(error); 
    });
  }
  
  function Update(id){
    axios.get(`https://reqres.in/api/users/${id}`).then((response) => {
        var updateData = response.data;
        setViewItem(updateData.data); 
        // Chuyển sang trang /viewItem/:id và truyền dữ liệu qua state
        navigate("/UpdateItem/" + id, {state: {data: updateData.data}});
      })
      .catch((error) => {
        console.log(error);
      });
  }


  function View(id){
    axios.get(`https://reqres.in/api/users/${id}`).then((response) => {
        var viewData = response.data;
        setViewItem(viewData.data); 
        // Chuyển sang trang /viewItem/:id và truyền dữ liệu qua state
        navigate("/viewItem/" + id, {state: {data: viewData.data}});
      })
      .catch((error) => {
        console.log(error);
      });
    // Xóa return
  }



  

    return (
      <div>
        <div className="tableItem" >
          <div className='table-row' style={styleObject}>{props.id}</div>
          <div className='table-row'style={styleObject}>{props.email}</div>
          <div className='table-row'style={styleObject}>{props.firstName}</div>
          <div className='table-row'style={styleObject}>{props.lastName}</div>
        <div className="button">
          <button className='delete-button'onClick= { ()=> deleteItem(props.id)}>xoá</button>
          <button className='update-button'onClick={ ()=> Update(props.id)}>sửa</button>
          <button className='view-button' onClick={() => View(props.id)}>View</button>
        </div>
        
        </div>
      </div>);
}


export default TableItem;