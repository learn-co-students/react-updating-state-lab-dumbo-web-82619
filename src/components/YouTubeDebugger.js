import React from 'react';

export default class YouTubeDebugger extends React.Component{

    constructor(props){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: '1080p'
                }
            }
        }
    }

    handleBitrate = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...previousState.settings,
                    bitrate: 12
                }
            }
        })
    }

    handleResolution = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...previousState.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        })
    }

    render(){
        return(
            <div>
                <button className='bitrate' onClick={this.handleBitrate}>Bitrate</button>
                <button className='resolution' onClick={this.handleResolution}>Resolution</button>
            </div>
        )
    }
}
