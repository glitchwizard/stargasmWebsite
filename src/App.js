import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import stargasmLogo from '../src/assets/2018-02-18---Stargasm-logo2_02.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
                  < div className="vid" >
                            < iframe
                                      width = "100%"
                                      height = "100%"
                                    src= "https://www.youtube.com/embed/lpMESlFzTx0?controls=0;autoplay=1"
                                    frameborder = "0"
                                    allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen > 
                            < /iframe>
                  </div>
        LISTEN TO
          <img src={stargasmLogo} className="App-logo" alt="logo" />
        </div>
        <Particles 
                height = "100vh"
                width = "100vw"
                style = {
                  {
                    position: 'fixed',
                    top: '0px',
                    margin: '0',
                    padding: '0',
                    zIndex: '-1',
                  }
        }/>
      </div>
    );
  }
}

export default App;
