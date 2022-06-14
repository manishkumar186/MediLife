import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class FooterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <>
                <div className='container-fluid bg-dark'>
                    <div className='row'>
                        <div className='col-md-4 p-0 text-center'>
                            <img src="" alt=""></img>
                            <span style={{ color: "white", fontSize: "20px" }}>MediLife</span>
                            <p style={{ color: "white" }}>
                                <small>5th flora, 700/D kings road, green<br></br>
                                    lane New Delhi-1782<br></br>
                                    +91 7973474237<br></br>
                                    contact@medilife.com</small></p>
                        </div>

                        <div class="col-md-4 p-3 text-center">
                            <p style={{ color: "white" }}>Useful Links</p>
                            <p><Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "15px" }}>Home /</Link>
                                <Link to="/medicine-list" style={{ color: "white", textDecoration: "none", fontSize: "15px" }}>Medicine List</Link>
                            </p>

                            <p><Link to="/about" style={{ color: "white", textDecoration: "none", fontSize: "15px" }}>About /</Link>
                                <Link to="/contact" style={{ color: "white", textDecoration: "none", fontSize: "15px" }}>Contact</Link>
                            </p>
                        </div>

                        <div class="col-md-4 p-3" style={{ color: "white" }}>
                            <p>We help 24*7</p>
                            <p><em>Contact: <ins>+91 7973474237</ins></em></p>
                            <p><em>Email: <ins>support.medilife@gmail.com</ins></em></p>

                        </div>
                        <div class="col-md-12 text-center">
                            <small style={{ color: "white" }}>Copyright ©2022 All rights reserved</small>

                        </div>

                    </div>
                </div>
            </>
        )


    }
}
export default FooterComponent;