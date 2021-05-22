import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

export default class Languages extends Component {
    render() {
        return  (
            <div>
                <h6 style={{color: "black"}}>Languages</h6>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Language</th>
                      <th>Understanding</th>
                      <th>Speaking</th>
                      <th>Writing</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr>
                      <td style={{textAlign:"center"}}>English</td>
                      <td style={{textAlign:"center"}}>B2</td>
                      <td style={{textAlign:"center"}}>B2</td>
                      <td style={{textAlign:"center"}}>B2</td>
                    </tr>
                    <tr>
                      <td style={{textAlign:"center"}}>French</td>
                      <td style={{textAlign:"center"}}>A1</td>
                      <td style={{textAlign:"center"}}>A2</td>
                      <td style={{textAlign:"center"}}>A1</td>
                    </tr>
                 </tbody>
                </Table>
            </div>
        );
    }
}