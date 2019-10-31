import React, {Component} from 'react'

export default class YouTubeDebugger extends Component{
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

      handleClick = (evt) => {
          this.setState({
             settings: {...this.state.settings, bitrate: 12}
          })
      } 

      handleClickR = (evt) => {
        this.setState({
           settings:{
               ...this.state.settings,
               video:{...this.state.settings.video, resolution: '720p'}
        }
         

        })
    } 

    render(){
        console.log( this.state)
        return(<div>
            
            <button className="bitrate" onClick={this.handleClick}>b </button>
            <button className="resolution" onClick={this.handleClickR}>r </button>
            </div>
        )
    }
}

