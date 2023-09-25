import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Header from './components/header';
import Contract from "./components/page/Comtract";
import Home from "./components/page/Home";
import News from "./components/page/News";
import More from "./components/page/more";
import ViewItem from "./components/axios/ViewItem";
import AddItem from "./components/axios/AddItem";
import UpdateItem from "./components/axios/UpdateItem";


function App() {
  

  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/Home" element ={<Home></Home>}></Route>
          <Route path="/Contract" element={<Contract></Contract>}></Route>
          <Route path="/News" element={<News></News>}></Route>
          <Route path="/more" element={<More></More>}></Route>
          <Route path="/viewItem/:id" element={<ViewItem></ViewItem>} />
          <Route path="/AddItem/" element={<AddItem></AddItem>} />
          <Route path="/UpdateItem/:id" element={<UpdateItem></UpdateItem>} />
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;