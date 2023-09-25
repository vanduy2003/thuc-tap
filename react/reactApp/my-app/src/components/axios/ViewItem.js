import React, {useState, useEffect } from "react";
import styles from "../../App.css";
import { useParams, useLocation } from "react-router-dom"; // Thêm useParams và useLocation

function ViewItem(props) {
  // Thêm biến id và data
  const { id } = useParams();
  const { state } = useLocation();
  const data = state.data;
  return(
    <div className="view-item">
        <h3>ID:{id}</h3>
        <h2>EMAIL:{data.email}</h2>
        <h1>NAME: {data.first_name} {data.last_name}</h1>
        xin chào đây là viewitem!
    </div>
  )  
}

export default  ViewItem;
