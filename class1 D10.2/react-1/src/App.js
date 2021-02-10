import React from 'react';
import './App.css';
import {Button1,Button2,Button3,Button4, Button5,Button6,Button7,Button8} from './button';
import List from "./List"
import Mnufec from "./Mnufec"

function App() {
  return (
    <div className="App">
      <List/>
      <Mnufec></Mnufec>
      <div className="button">
      <Button1></Button1>
      <Button2></Button2>
      <br/>
      <Button3></Button3>
      <Button4></Button4>
      <br></br>
      <Button5></Button5>
      <Button6></Button6>
      <br></br>
      <Button7></Button7>
      <Button8></Button8>
      </div>
    </div>
  );
}

export default App;
