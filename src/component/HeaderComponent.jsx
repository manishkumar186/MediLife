import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import AddressService from '../service/AddressService';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: []
        }

        

        this.logout = this.logout.bind(this);
    }

    logout = () => {
        localStorage.removeItem("detail");
        this.props.history.push("/");
    }

    adminLogout = () => {
        localStorage.removeItem("adminDetail");
        this.props.history.push("/");

    }


    viewProduct(categoryName) {
        this.props.history.push(`/category-medicine-list/${categoryName.replace(/ /g, "-")}`);

    }


    componentDidMount() {
        AddressService.getAllCategory().then((res) => {
            this.setState({ category: res.data });

        });
    }




    render() {
        const details = JSON.parse(localStorage.getItem('detail'));
        const adminDetails = JSON.parse(localStorage.getItem('adminDetail'));


        if (details) {
            return (
                <>
                    <div class='container-fluid'>
                        <div className='row'>
                            <div className='col-md-12 p-0'>
                                <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                                    <Link class="navbar-brand" to="/">MediLife</Link>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>

                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav mx-auto">
                                            <li class="nav-item active">
                                                <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" to="/about">About</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" to="/contact">Contact</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" to="/medicine-list">Medicine</Link>
                                            </li>

                                            <li class="nav-item">
                                                <Link class="nav-link" to="/prescription">Prescription</Link>
                                            </li>

                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Category
                                                </a>

                                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    {this.state.category.map(data =>
                                                        <Link class="dropdown-item" onClick={() => this.viewProduct(data.categoryName)}>{data.categoryName}</Link>
                                                    )}

                                                </div>
                                            </li>

                                            



                                        </ul>
                                        <ul class="navbar-nav">

                                            <li class="nav-item">
                                                <Link class="nav-link" to="/">{details}</Link>
                                            </li>

                                            <li class="nav-item">
                                                <Link class="nav-link" to="/my-order">My Order</Link>
                                            </li>

                                            <li class="nav-item">
                                                <Link class="nav-link" to="/add-to-cart">My Cart</Link>
                                            </li>

                                            <li class="nav-item">
                                                <Link class="nav-link" to="" onClick={this.logout}>Logout</Link>
                                            </li>
                                        </ul>



                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </>
            )

        }

        if (adminDetails) {
            return (
                <>
                    <div className="container-fluid">
                        <div className='row'>
                            <div className='col-md-12 p-0'>
                                <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                                    <Link class="navbar-brand" to="/">MediLife</Link>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>

                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav mx-auto">
                                            <li class="nav-item active">
                                                <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" to="/add-medicine">Add Medicine</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" to="/add-category">Add Category</Link>
                                            </li>
                                            <li className='nav-item'>
                                                <Link className='nav-link' to="/all-prescription">Prescription Detail</Link>
                                            </li>
                                            <li className='nav-item'>
                                                <Link className='nav-link' to="/all-order">Order Detail</Link>
                                            </li>
                                            <li className='nav-item'>
                                                <Link className='nav-link' to='/admin-product-detail'>Product</Link>
                                            </li>
                                            <li className='nav-item'>
                                                <Link className='nav-link' to='/all-user-feedback-detail'>User Feedback</Link>
                                            </li>
                                            

                                        </ul>
                                        <ul class="navbar-nav">
                                            <li class="nav-item">
                                                <Link class="nav-link" to="/user-login">{adminDetails}</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" to="" onClick={this.adminLogout}>Logout</Link>
                                            </li>
                                        </ul>



                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </>
            )
        }

        else {
            return (
                <>
                    <div class='container-fluid'>
                        <div className='row'>
                            <div className='col-md-12 p-0'>
                                <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                                    <Link class="navbar-brand" to="/">MediLife</Link>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>

                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav mx-auto">
                                            <li class="nav-item active">
                                                <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" to="/about">About</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" to="/contact">Contact</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" to="/medicine-list">Medicine</Link>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Category
                                                </a>

                                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    {this.state.category.map(data =>
                                                        <Link class="dropdown-item" onClick={() => this.viewProduct(data.categoryName)}>{data.categoryName}</Link>
                                                    )}

                                                </div>
                                            </li>

                                          

                                        </ul>
                                        <ul class="navbar-nav mr-5">

                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Login/Register
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <Link class="dropdown-item" to="/user-login">User</Link>
                                                    <div class="dropdown-divider"></div>
                                                    <Link class="dropdown-item" to="/admin-login">Admin</Link>
                                                </div>
                                            </li>

                                        </ul>



                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </>
            )
        }


    }
}
export default withRouter(HeaderComponent);
