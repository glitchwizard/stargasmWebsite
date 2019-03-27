import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';


class Header extends React.Component {

    render(){
        return <div className="componentStyle">
            <div className="headerBar">
                
                <div className="headerItem">
                </div>
                <div className="headerItem">
                    <input
                        type="range"
                        value={this.props.volume}
                        min={0}
                        max={100}
                        step={1}
                        onChange={this.props.onVolumeChange}
                    />
                    <h6 id="volumeHeader">Volume: {this.props.volume}</h6>
                </div>
                <div className="headerItem" onClick={this.props.onTogglePlay}>
                    <img src={this.props.playButtonState} alt='Play/Pause button' id="playButtonIcon" />
                </div>
                <div className="headerItem" onClick={this.props.onToggleMute}>
                    <div className="unMuteButtonContainer" >
                        <img src={this.props.muteButtonToggle} alt='Mute/Unmute Button' id="unMuteButtonIcon" />
                    </div>
                </div>
            </div>
        </div>
    }

}

Header.propTypes = {
    onVolume: PropTypes.func,
    onTogglePlay: PropTypes.func,
    onToggleMute: PropTypes.func,
    volume: PropTypes.number,
    playButtonState: PropTypes.string,
    muteButtonToggle: PropTypes.string
};

export default Header;