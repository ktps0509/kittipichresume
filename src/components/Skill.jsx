import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'


export class Skill extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                 <Image  src={this.props.imgurl} rounded style={{width : '80px', height : '80px'}}/>
            </div>
        )
    }
}

export default Skill
