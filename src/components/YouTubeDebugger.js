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
                bitrate: 12   
            }      
        })
    }

        handleRes = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution : '720p'
                }
            }      
        })
    }


    render() {
        return (
            <div>
                <div>
                    <button onClick={this.handleClick} 
                            className="bitrate">{this.state.settings.bitrate}
                    </button>
                </div>
                <div>
                    <button onClick={this.handleRes} 
                            className="resolution">{this.state.settings.video.resolution}        
                    </button>
                </div> 
            </div>
        )
    }
}

export default YouTubeDebugger;
