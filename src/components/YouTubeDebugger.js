// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    }

    handleClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12,
                
            }      
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.handleClick}className="bitrate">{this.state.settings}</button>
                <button onClick={this.handleClick}className="resolution">{this.state.settings.video}</button>
            </div>
        )
    }
}

export default YouTubeDebugger;