import React, { Component } from 'react'
import axios from 'axios'
import TableS from './Table'

export class Home extends Component {

    constructor(props) {
        super(props)
        this.getData();
    }

    state = {
        name: 'Net Cube',
        objects: [],
        Employee: {
            ID: '',
            Name: '',
            Position: ''
        }

    }

    getData = () => {
        let url = 'http://localhost:35761/Demo/api/Employee'

        axios
            .get(url)
            .then(
                response => {
                    console.log(response.data)
                    this.setState({ objects: response.data })
                    console.log(this.state.objects)
                }
            )
    }


    render() {
        return (
            <div>
                <TableS Objects={this.state.objects} />
            </div>
        )
    }
}

export default Home

