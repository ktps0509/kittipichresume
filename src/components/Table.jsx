import React, { Component } from 'react'

import axios from 'axios'
import API from './Service/API';


export class TableS extends Component {


    deleteRow = id => {
        API.delete(`delete/${id}`)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const{Objects} = this.props
        return (
            <div>
                <table className="table">
                    <thead>
                        <td><b>Name</b></td>
                        <td><b>Position</b></td>
                    </thead>

                    <tbody>
                        {
                            Objects.map((Employee)=>(
                                <tr key={Employee.ID}>
                                
                                <td>{Employee.Name}</td>
                                <td>{Employee.Position}</td>
                                <button onClick={(e) => this.deleteRow(Employee.ID, e)}>Delete Row</button>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}

export default TableS