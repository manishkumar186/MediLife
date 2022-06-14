import React, { Component } from 'react'
import pic1 from '../Images/pic1.jpeg'
import pic2 from '../Images/pic2.jpg'
import pic3 from '../Images/pic3.jpg'
import banner1 from '../Images/banner1.jpg'
import banner2 from '../Images/banner2.jpg'
import AddressService from '../service/AddressService';

class HomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

            product: []

        }
        


    }


    componentDidMount() {
        AddressService.getAllCategory().then((res) => {
            this.setState({ product: res.data });

        });
    }

    viewProduct(categoryName) {
        this.props.history.push(`/category-medicine-list/${categoryName.replace(/ /g,"-")}`);

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
                                        <img src={pic2} class="d-block w-100" height={500} alt="First slide" />

                                    </div>
                                    <div class="carousel-item">
                                        <img src={pic3} class="d-block w-100" height={500} alt="Second slide" />
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
                    </div>

                    <div className="row mt-5">
                        {this.state.product.map(data =>
                            <div className="col-md-3 mt-5 mb-2">
                                <div className="card">
                                    <button onClick={() => this.viewProduct(data.categoryName)} style={{ textDecoration: "None" }}>
                                        <img className="card-img-top" src={data.categoryPic} alt="Card image cap" style={{ height: "200px" }} />
                                        <div className="card-body" style={{height:"150px"}}>
                                            <h5 className="card-title text-center text-dark">{data.categoryName.replace(/-/g,' ')}</h5>
                                            <hr></hr>
                                            <p className="card-text text-justify">{data.categoryDesc}</p>

                                            <hr></hr>

                                        </div>
                                    </button>
                                </div>

                            </div>
                        )
                        }
                    </div>





                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={banner1} style={{ width: "100%" }}></img>
                        </div>
                        <div className='col-md-6'>
                            <img src={banner2} style={{ width: "100%", height: "200px" }}></img>
                        </div>
                        <div className='col-md-12 mt-3'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7905588784183!2d77.61994961413592!3d13.048999416707456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17659e5aeccb%3A0x2eecadc5e9e8dbab!2sCognizant%20Technology%20Solutions!5e0!3m2!1sen!2sin!4v1649148249054!5m2!1sen!2sin" width="100%" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default HomeComponent;