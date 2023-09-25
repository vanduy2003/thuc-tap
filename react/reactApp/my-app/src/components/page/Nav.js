import React from "react";
import { Link } from "react-router-dom";
import styles from '../../App.css';

function Nav() {
    return (
        <div>
             <ul className="nav-links">
              <Link to="/Home">Home</Link>
              <Link to="/Contract">Contract</Link>
              <Link to="/News">News</Link>
              <Link to="/more">More</Link>
           </ul>
        </div>
    )



}

export default Nav;