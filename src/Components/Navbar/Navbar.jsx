import React, { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [range, setRange] = useState(256);
 const [navbar, setNavbar] = useState({
    navbarSize: range,
  })
  // console.log(range);
  return (
    <div className="navbar">
      <div className="left">onlineCompiler</div>
      <div className="right">
        {/* <div className="range">
          <form >
            <span>Font Size</span>
            <input
              type="range"
              min="20"
              max="100"
              value={range}
              onChange={(e) => setRange(e.target.value)}
            />
            <span>px</span>
          </form>
        </div> */}
        <div className="theme">
         
        </div>
      </div>
    </div>
  );
}

export  {Navbar};


