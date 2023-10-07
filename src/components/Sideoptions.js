import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Sideoptions() {
    return(
       <>
       <div className="sidetext">
              <Link to="/">General</Link>
            </div>
            <div className="sidetext">
              <Link to="/sports">Sports</Link>
            </div>
            <div className="sidetext">
              <Link to="/entertainment">Entertainment</Link>
            </div>
            <div className="sidetext">
              <Link to="/politics">Politics</Link>
            </div>
            <div className="sidetext">
              <Link to="/science">Science</Link>
            </div>
            <div className="sidetext">
              <Link to="/technology">Technology</Link>
            </div>
            <div className="sidetext">
              <Link to="/business">Business</Link>
            </div>
            <div className="sidetext">
              <Link to="/stocks">Stocks</Link>
            </div>
            <div className="sidetext">
              <Link to="/bitcoin">Bitcoin</Link>
            </div>
            <div className="sidetext">
              <Link to="/health">Health</Link>
            </div>
       </>
    );
    
}