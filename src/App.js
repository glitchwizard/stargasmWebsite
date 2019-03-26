import React, {Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import stargasmLogo from '../src/assets/2018-02-18---Stargasm-logo2_02.png';
import particleConfig from './assets/particlesjs-config.json';
import YouTube from 'react-youtube';
import unMuteButton from './assets/Speaker_Icon.svg';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      volume: 0.2,
      paused: false,
      mute: true
    };
    
    this.toggleMute = this.toggleMute.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handlePlayerPause = this.handlePlayerPause.bind(this);
    this.handlePlayerPlay = this.handlePlayerPlay.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }

  handlePause(event) {
    this.setState({
      paused: event.target.checked,
    });
  }

  handlePlayerPause() {
    this.setState({paused: true});
  }

  handlePlayerPlay() {
    this.setState({paused: false});
  }

  handleVolume(event) {
    this.setState({
      volume: parseFloat(event.target.value),
    });
  }

  handleVolumeUp(event){
    let currentVolume = parseFloat(this.state.volume);
    if (currentVolume < 1) {
      currentVolume += .10
      this.setState({
        volume: currentVolume
      })
    }
    
  }

  handleVolumeDown(event){
    let currentVolume = parseFloat(this.state.volume);
    if (currentVolume < 1) {
      currentVolume += .10
      this.setState({
        volume: currentVolume
      })
    }
  }
 

_onReady(event){
  event.target.mute();

}

toggleMute(event){
  alert('event' + event.target);
  console.log('event: \n' + event);

 if(event.target.isMuted()){
   event.target.unMute();
 } else {
   event.target.mute();
 }
}


  render() {

    const {
      volume, paused, suggestedQuality,
    } = this.state;

    const youTubeOptions = {
      height: '100%',
      width: '100%',
      playerVars: {
        autoplay: 1,
        controls: 0,
        loop: 1,
        enablejsapi: 1,
        iv_load_policy: 3
      }
    }

    return (
    <div className="App" >
        <div className="vid" >
            <YouTube
              videoId='lpMESlFzTx0'
              className="youtubePlayerVidep"
              containerClassName='youtubePlayerContainer'
              opts={youTubeOptions}
              onReady={this._onReady}
            />
      </div>
        <div className="headerBar">
          <div>
            Volume controls will go here
          </div>
          <div className="unMuteButtonContainer" onClick={this.toggleMute}>
            <img src={unMuteButton} alt='Unmute Button' id="unMuteButtonIcon"/>
          </div>
        </div>
          
      <div className="App-header" >
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