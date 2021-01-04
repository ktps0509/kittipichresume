import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'


export class SlidePort extends Component {
    render() {
        return (
            <div>
                <Image  src={this.props.imgurl} rounded style={{width : '250px', height : '250px', margin: '40px'}} />
            </div>
        )
    }
}

export default SlidePort
