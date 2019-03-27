import React, {Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import stargasmLogo from '../src/assets/2018-02-18---Stargasm-logo2_02.png';
import particleConfig from './assets/particlesjs-config.json';
import YouTube from 'react-youtube';
import muteButton from './assets/muteIcon.svg';
import unMuteButton from './assets/speakerIcon.svg';
import pauseButton from './assets/pauseButton.svg';
import playButton from './assets/playButton.svg';
import Header from './components/Header/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      volume: 20,
      paused: false,
      player: null,
      playButtonState: pauseButton,
      muteButtonToggle: unMuteButton
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


  _onReady(event) {
    this.setState({
      player: event.target,

    });
    setTimeout(this.state.player.playVideo(),1000);
    this.state.player.setVolume(20);
  }

  toggleMute() {
    if (this.state.player.isMuted()) {
      this.setState({muteButtonToggle: unMuteButton});
      this.state.player.unMute();
    } else {
      this.setState({muteButtonToggle: muteButton});
      this.state.player.mute();
    }
  }

  togglePlay() {
    console.log(this.state);
    if (this.state.paused) {
      this.setState({playButtonState: pauseButton});
      this.handlePlayerPlay();
    } else {
      this.setState({playButtonState: playButton});
      this.handlePlayerPause();
    }
  }


  render() {

    const youTubeOptions = {
      height: '100%',
      width: '100%',
      playerVars: {
        autoplay: 1,
        controls: 0,
        loop: 1,
        enablejsapi: 1,
        iv_load_policy: 3,
        modestbranding: 1,
        playlist: 'lpMESlFzTx0'
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
        <Header
          onVolumeChange={this.handleVolume}
          onTogglePlay={this.togglePlay}
          onToggleMute={this.toggleMute}
          volume={this.state.volume}
          playButtonState={this.state.playButtonState}
          muteButtonToggle={this.state.muteButtonToggle}
        />
        <div className="App-header" onClick={()=>this.state.player.playVideo()}>
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