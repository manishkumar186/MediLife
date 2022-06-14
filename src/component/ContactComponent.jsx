import React, { Component } from 'react'
import contact from '../Images/contact.jpg'
class ContactComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className='container-fluid mt-5'>
                    <div className='row'>
                        <div className='col-md-6 p-0'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7905588784183!2d77.61994961413592!3d13.048999416707456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17659e5aeccb%3A0x2eecadc5e9e8dbab!2sCognizant%20Technology%20Solutions!5e0!3m2!1sen!2sin!4v1649148249054!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className='col-md-6 card mt-2'>
                           <img src={contact} style={{height:"450px",width:"100%"}}></img>
                           
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default ContactComponent;