import React, { Component } from 'react'
import AddressService from '../service/AddressService';

class AddToCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity:'',
            detail: []
        }
        

        this.deleteCardDetail = this.deleteCardDetail.bind(this);
        this.PaymentPage = this.PaymentPage.bind(this);
        this.quantityHandler = this.quantityHandler.bind(this);
    }

    quantityHandler=(event)=>{
        this.setState({quantity:event.target.value});
    }

    deleteCardDetail(cartId) {
        AddressService.deleteCartDetail(cartId).then((res) => {
            this.setState({ detail: this.state.detail.filter(cartdetail => cartdetail.cartId !== cartId) });
        })

    }

    componentDidMount() {
        AddressService.getCartByUserName(JSON.parse(localStorage.getItem('detail'))).then((res) => {
            this.setState({ detail: res.data });


        });
    }

    PaymentPage=(data)=>{
        let cartDetail = {productName:data.productName,productPic:data.productPic,productPrice:data.productPrice,salePrice:data.salePrice,quantity:this.state.quantity};
        localStorage.setItem('orderDetail', JSON.stringify(cartDetail));
        this.props.history.push("/payment-page");
    
        }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="column mt-5">
                            <table className='table table-bordered mt-3'>
                                <thead>
                                    <tr>
                                        <th>Product Image</th>
                                        <th>Product Name</th>
                                        <th>Product Price</th>
                                        <th>Quantity</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.detail.map(data =>
                                        <tr>

                                            <td><img src={data.productPic} style={{ height: "100px" }}></img></td>
                                            <td>{data.productName}</td>
                                            <td>{data.salePrice}</td>
                                            <td><select value={this.state.quantity} className='form-control' onChange={this.quantityHandler} name="quantity">
                                            <option value="" disabled="disabled">Select Quantity</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select></td>
                                            <td><button type='button' className='btn btn-success' onClick={() => this.PaymentPage(data)}>Proceed</button>
                                                <button type='button' className='btn btn-danger ml-3' onClick={() => this.deleteCardDetail(data.cartId)}>Remove</button></td>

                                        </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default AddToCart;