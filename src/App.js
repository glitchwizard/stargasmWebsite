import React, {Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import stargasmLogo from '../src/assets/2018-02-18---Stargasm-logo2_02.png';
import particleConfig from './assets/particlesjs-config.json';
import YouTube from 'react-youtube';
import muteButton from './assets/Mute_Icon.svg';
import unMuteButton from './assets/Speaker_Icon.svg';
import pauseButton from './assets/pauseButton.svg';
import playButton from './assets/playButton.svg';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      volume: 20,
      paused: false,
      player: null
    };
    this._onReady = this._onReady.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
    this.handlePlayerPause = this.handlePlayerPause.bind(this);
    this.handlePlayerPlay = this.handlePlayerPlay.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
  }

  handlePlayerPause() {
    this.setState({paused: true});
    this.state.player.pauseVideo();
  }

  handlePlayerPlay() {
    this.setState({paused: false});
    this.state.player.playVideo();
  }

  handleVolume(event) {
    this.setState({volume: event.target.value});
    this.state.player.setVolume(event.target.value);
  }
 

  _onReady(event){
    this.setState({
      player: event.target,
      muteButtonToggle: unMuteButton,
      playButtonState: pauseButton
    });
    this.state.player.setVolume(20);
  }

  toggleMute(){
    if(this.state.player.isMuted()){
      this.setState({muteButtonToggle: unMuteButton});
      this.state.player.unMute();
    } else {
      this.setState({muteButtonToggle: muteButton});
      this.state.player.mute();
    }
  }

  togglePlay(){
    console.log(this.state);
    if (this.state.paused){
      this.setState({playButtonState: pauseButton});
      this.handlePlayerPlay();
    } else {
      this.setState({playButtonState: playButton});
      this.handlePlayerPause();
    }
  }


  render() {

    const {
      volume, paused
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

          
      <div className="App-header" >
        <div className='AppText'>
          <div className='callToAction'> LISTEN TO </div>
          <img src={stargasmLogo}
            className="App-logo"
            alt="logo" />
        <div className="headerBar">
          <div className="headerItem">
              
             <input
                type="range"
                value={volume}
                min={0}
                max={100}
                step={1}
                onChange={this.handleVolume}
            />
              <h6 id="volumeHeader">Volume: {this.state.volume}</h6> 
          </div>
              <div className="headerItem" onClick={this.togglePlay}>
                <img src={this.state.playButtonState} alt='Play/Mute button' id="playButtonIcon" />
          </div>
          <div className="headerItem">
            <div className="unMuteButtonContainer" onClick={this.toggleMute}>
              <img src={this.state.muteButtonToggle} alt='Unmute Button' id="unMuteButtonIcon"/>
            </div>
          </div>
        </div>
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