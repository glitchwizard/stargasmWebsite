import React, {
  Component
} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import stargasmLogo from '../src/assets/2018-02-18---Stargasm-logo2_02.png';
import particleConfig from './assets/particlesjs-config.json';
import YouTube from 'react-youtube';
import unMuteButton from './assets/Speaker_Icon.svg';

class App extends Component {

_onReady(event){
  event.target.mute();
}


  render() {
    const youTubeOptions = {
      height: '100%',
      width: '100%',
      playerVars: {
        autoplay: 1,
        controls: 0,
        loop: 1,
        enablejsapi: 1
      }
      
    }

    return (<div className="App" >
        <div className="vid" >
            <YouTube
              videoId='lpMESlFzTx0'
              className="youtubePlayerVidep"
              containerClassName='youtubePlayerContainer'
              opts={youTubeOptions}
              onReady={this._onReady}
            />
        </div>
      <div className="App-header" >
        <div className="unMuteButtonContainer">
          <img src={unMuteButton} alt='Unmute Button' id="unMuteButtonIcon"/>
        </div>
        <div className='AppText'>
          <div className='callToAction'> LISTEN TO </div>
          <img src={stargasmLogo}
            className="App-logo"
            alt="logo" />
        </div>
      </div>
      <Particles
        height="100vh"
        width="100vw"
        params={
          particleConfig
        }
        style={
          {
            position: 'fixed',
            top: '0px',
            margin: '0',
            padding: '0',
            zIndex: '-1',
          }

        }
      /> </div>
    );
  }
}

export default App;