import React from 'react';
import TitleBar from './components/TitleBar'
import { useState } from 'react'
import Top from './pages/Top'


function App() {

  const bodyStyle = {
    "width": "calc(100% - 5px)",
    "height": "calc(100vh - 45px)"
  }
  const windowStyle = {
    "height": "100%"
  }

  return (
    <div className="App window" style={windowStyle}>
      <TitleBar title="This is Title" />
      <div className="window-body" style={bodyStyle}>
        <Top text="Hello World! Windows98"/>
      </div>
    </div>
  );
}



export default App;
