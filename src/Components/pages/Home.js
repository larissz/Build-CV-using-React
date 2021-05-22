import React, { Component } from 'react'
import Profile from "../../Components/pages/Profile";
import Languages from "./Languages";
import Education from "../../Components/pages/Education";
import About from "../../Components/pages/About";
import Skills from "../../Components/pages/Skills";
import ReactRoundedImage from 'react-rounded-image';
import MyPhoto from '../../Components/pages/images/photo.png';

export default class Home extends Component {
    render() {
        return (
            <section>
                <div class="row">
                    <div className="col s12 l3 grey lighten-2">
                        <p></p>
                        <img src={MyPhoto} width="95" height="105" alt=""/>
                           <h6 style={{color: "black", fontWeight: "bold"}}>Larisa Szabo</h6>
                        <About />
                        <Languages />
                        <Skills />
                    </div>
                    <div className="col s12 l7 white">
                        <Profile />
                        <Education />
                    </div>
                    <div className="col s12 l1 white">
                    </div>
                </div>
            </section>
        );
    }
}