import React, { Component } from 'react'
import pic1 from '../Images/pic1.jpeg'
import pic2 from '../Images/pic2.jpg'
import pic3 from '../Images/pic3.jpg'

class AboutComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12 mt-5 p-0'>
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={pic3} class="d-block w-100" height={500} alt="First slide" />

                                    </div>
                                    <div class="carousel-item">
                                        <img src={pic2} class="d-block w-100" height={500} alt="Second slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={pic1} class="d-block w-100" height={500} alt="Third slide" />
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>

                        <div class="col-md-12 p-0">
                            <h5 class="bg-dark text-light text-center" ><marquee direction="right">Self Pickup option now available on MediLife. A few days ago, we hit 10 million monthly orders, and our medicine delivery services are currently present in 41 cities.</marquee> </h5>
                        </div>
                        <div class="col-md-12 p-0">
                            <h5 class="bg-dark text-light text-center" ><marquee direction="left">Self Pickup option now available on MediLife. A few days ago, we hit 10 million monthly orders, and our medicine delivery services are currently present in 41 cities.</marquee> </h5>
                        </div>
                        <div class="col-md-3 my-2">
                            <div class="card">
                                <div class="card-header">
                                    <p>How does MediLife work?</p>
                                </div>
                                <div class="card-body text-justify">
                                    <p>To begin with, through its E-medicine delivery business, MediLife No charges a commission to the Customer on the basis of order. While users pay a delivery fee, MediLife sell all type of medicine, which is then split among the delivery partner and the company.</p>
                                </div>
                                <div class="card-footer">
                                    <small><em>From MediLife & Team</em></small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 my-2">
                            <div class="card">
                                <div class="card-header">
                                    <p>How do you order medicine on MediLife?</p>
                                </div>
                                <div class="card-body text-justify">
                                    Search for the Medicine.Now that the List of medicine's page is open, go to “Order Delivery” from the right side.
                                </div>
                                <div class="card-footer">
                                    <small><em>From MediLife & Team</em></small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 my-2">
                            <div class="card">
                                <div class="card-header">
                                    <p>Is Medlife a good company?</p>
                                </div>
                                <div class="card-body text-justify">
                                    <p>YES. Its a good company with authentic medicines. </p>
                                    <ul type="disc">
                                        <li>It is fully registered in India. ...</li>
                                        <li>All type of medicine available. ...</li>
                                        <li>MediLife work all over india. ...</li>
                                        <li>MediLife see all type of feedback and response with in days . ...</li>
                                        <li>We have also some physical frenchises.</li>
                                    </ul>

                                </div>
                                <div class="card-footer">
                                    <small><em>From MediLife & Team</em></small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 my-2">
                            <div class="card">
                                <div class="card-header">
                                    <p>Prescription Information</p>
                                </div>
                                <div class="card-body text-justify">
                                    <ul>
                                        <li>User upload the prescription.</li>
                                        <li>With in hours prescription will be approved.</li>
                                        <li>MediLife try delivery in same day.</li>
                                        <li>No third party involved</li>
                                        <li>only required account in MediLife</li>
                                        <li>If any problem contact directly.</li>
                                        <li>You can also send mail if any suggestion.</li>
                                    </ul>

                                </div>
                                <div class="card-footer">
                                    <small><em>From MediLife& Team</em></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default AboutComponent;