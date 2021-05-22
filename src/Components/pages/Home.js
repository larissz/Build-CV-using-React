import React, { Component } from 'react'
import Profile from "../../Components/pages/Profile";
import Languages from "./Languages";
import Education from "../../Components/pages/Education";
import About from "../../Components/pages/About";
import Skills from "../../Components/pages/Skills";
import Communication from "../../Components/pages/Communication";
import Organisation from "../../Components/pages/Organisation";
import Other from "../../Components/pages/Other";
import ReactRoundedImage from 'react-rounded-image';
import MyPhoto from '../../Components/pages/images/image.png';

export default class Home extends Component {
    render() {
        return (
            <section>
                <div class="row">
                    <div className="col s12 l1 white">
                    </div>
                </div>

                <div class="row">
                    <div className="col s12 l1 white"></div>
                    <div className="col s12 l3 purple lighten-2">
                        <br></br><br></br>
                        <img src={MyPhoto} width="150" height="170" alt=""/>
                           <h6 style={{color: "black", fontWeight: "bold"}}>Larisa Szabo</h6>
                        <About />
                        <Languages />
                        <Skills />
                    </div>
                    <div className="col s12 l7 purple lighten-5">
                        <br></br><br></br><br></br>
                        <Profile />
                        <Education />
                        <Communication />
                        <Organisation />
                        <Other />
                    </div>
                    <div className="col s12 l1 white">
                    </div>
                </div>
            </section>
        );
    }
}