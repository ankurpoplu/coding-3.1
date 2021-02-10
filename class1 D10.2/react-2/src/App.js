import React from "react"
import './App.css';

function App() {
  return (
    <div className="App">
      <span className="App_span">PRO</span>
      <img id="img1" src="img2.jpg" alt="img"></img>
      <h2>Simen Smith</h2>
      <h3>Berlin</h3>
      <p className="detail">User interfaace designer and Front-end developer</p>
      <div className="midBox">
        <button className="mbtn" id="btn1">Message</button>
        <button className="mbtn" id="btn2">Following</button>
      </div>
      <div className="lowBox">
        SKILLS
        <br></br>
        <button className="lbtn">UI/UX</button>
        <button className="lbtn">Front End Development</button>
        <button className="lbtn">HTML</button>
        <button className="lbtn">CSS</button>
        <button className="lbtn">javaScript</button>
        <button className="lbtn">React</button>
        <button className="lbtn">Node</button>
      </div>
    </div>
  );
}

export default App;
