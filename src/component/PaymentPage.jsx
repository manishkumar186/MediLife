import React, { Component } from 'react'
import AddressService from '../service/AddressService';
class PaymentPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            userName: '',
            email: '',
            contact: '',
            address: '',
            productName: '',
            productPrice: '',
            productPic: '',
            cardName: '',
            cardNumber: '',
            cvv: '',
            errorMessage: ''


        }
        this.paymentDetail = this.paymentDetail.bind(this);
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.userNameChangeHandler = this.userNameChangeHandler.bind(this);
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.contactChangeHandler = this.contactChangeHandler.bind(this);
        this.addressChangeHandler = this.addressChangeHandler.bind(this);
        this.cardNameHandler = this.cardNameHandler.bind(this);
        this.cardNumberHandler = this.cardNumberHandler.bind(this);
        this.cvvNumberHandler = this.cvvNumberHandler.bind(this);


    }
    nameChangeHandler = (event) => {
        this.setState({ name: event.target.value })
    }
    userNameChangeHandler = (event) => {
        this.setState({ userName: event.target.value })
    }
    emailChangeHandler = (event) => {
        this.setState({ email: event.target.value })
    }
    contactChangeHandler = (event) => {
        this.setState({ contact: event.target.value })
    }
    addressChangeHandler = (event) => {
        this.setState({ address: event.target.value })
    }

    cardNameHandler = (event) => {
        this.setState({ cardName: event.target.value })
    }

    cardNumberHandler = (event) => {
        this.setState({ cardNumber: event.target.value })
    }

    cvvNumberHandler = (event) => {
        this.setState({ cvv: event.target.value })
    }

    componentDidMount() {
        const loginUserDetail = JSON.parse(localStorage.getItem('userDetail'));
        let data = loginUserDetail;

        this.setState({
            name: data.userFirstName,
            userName: data.userName,
            email: data.userEmail,
            contact: data.userContact,
            address: data.userAddress
        })




    }




    paymentDetail = (allDetail, quantity) => {
        if (this.state.cardName == '') {
            alert("please fill the card name")
        }
        else if (this.state.cardNumber == '') {
            alert("please fill the debit/credit card number")
        }
        else if (this.state.cvv == '') {
            alert('please fill the cvv number')
        }
        else {
            let orderDetails = { name: this.state.name, userName: this.state.userName, email: this.state.email, contact: this.state.contact, address: this.state.address, productName: allDetail.productName, productPrice: quantity, productPic: allDetail.productPic }
            AddressService.addOrderDetail(orderDetails).then(res => {
                alert("Your order has been placed....")
                localStorage.removeItem("orderDetail");
                this.props.history.push("/");

            })
        }



    }


    render() {
        const allDetail = JSON.parse(localStorage.getItem('orderDetail'));
        let quantity = allDetail.quantity * allDetail.salePrice;

        return (
            <>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6 mr-2 mt-5 card mb-1">
                            <div className='form-group'>
                                <label htmlFor="">Name</label>
                                <input type="text" class="form-control" value={this.state.name} name="name" onChange={this.nameChangeHandler}></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="">UserName</label>
                                <input type="text" class="form-control" value={this.state.userName} name="userName" onChange={this.userNameChangeHandler}></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="">Email</label>
                                <input type="email" class="form-control" value={this.state.email} name="email" onChange={this.emailChangeHandler}></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="">Contact</label>
                                <input type="tel" class="form-control" value={this.state.contact} name="contact" onChange={this.contactChangeHandler}></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="">Address</label>
                                <textarea name="" id="" cols="10" rows="5" className='form-control' value={this.state.address} name="address" onChange={this.addressChangeHandler}></textarea>
                            </div>


                        </div>

                        <div className='col-md-4 card mb-1 mt-5 mr-3'>
                            <div className='form-group'>
                                <label htmlFor="">Name on Card</label>
                                <input type="text" className='form-control' name='cardName' onChange={this.cardNameHandler} value={this.state.cardName}></input>
                            </div>
                            <p>{this.state.errorMessage}</p>
                            <div className='form-group'>
                                <label htmlFor="">Card number</label>
                                <input type="number" className='form-control' name='cardNumber' onChange={this.cardNumberHandler} value={this.state.cardNumber}></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="">Expiration</label>
                                <input type="date" className='form-control'></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="">CVV</label>
                                <input type="number" className='form-control' name='cvv' onChange={this.cvvNumberHandler} value={this.state.cvv}></input>
                            </div>


                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 mt-5 card mx-auto mb-4'>
                            <table className='table table-bordered mt-3'>
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Product Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{allDetail.productName}</td>
                                        <td>{quantity}</td>
                                        <td><img src={allDetail.productPic} style={{ height: "100px" }}></img></td>
                                    </tr>
                                </tbody>
                            </table>

                            <button type='button' className='btn btn-success mb-3' onClick={() => this.paymentDetail(allDetail, quantity)}>Pay Now</button>

                        </div>
                    </div>




                </div>
            </>
        )
    }
}
export default PaymentPage;