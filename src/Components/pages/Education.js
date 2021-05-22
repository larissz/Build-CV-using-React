import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

export default class Education extends Component {
    render() {
        return  (
            <div>
                <h6 style={{color: "black", fontWeight: "bold"}}>Education and training</h6>
                <p><b>2018-Present</b>   Polytechnic University of Timisoara, Faculty of Automation and Computers (Romania)</p>
                <p  style={{textAlign:"center"}}><b>2014-2018</b><b> Baccalaureate Diploma</b><br /> "Atanasie Marienescu" Highschool, Matematics-Informatics, Lipova (Romania)</p>
            </div>
        );
    }
}