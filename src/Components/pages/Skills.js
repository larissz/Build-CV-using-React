import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import ReactDOM from 'react-dom';

export default class Skills extends Component {
    render() {
        return (
            <div>
                <h6 style={{color: "black"}}><br />Skills</h6>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th style={{textAlign:"center"}}>C++</th>
                      <th style={{textAlign:"center"}}>C#</th>
                      <th style={{textAlign:"center"}}>Java</th>
                      <th style={{textAlign:"center"}}>CSS, JavaScript, MySQL</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr>
                      <td style={{textAlign:"center"}}>good</td>
                      <td style={{textAlign:"center"}}>good</td>
                      <td style={{textAlign:"center"}}>good</td>
                      <td style={{textAlign:"center"}}>medium</td>
                    </tr>
                 </tbody>
                </Table>
      </div>
        );
    }
}