import React, { Component } from 'react'
import AddressService from '../service/AddressService';
import update from '../Images/update.png';

class UpdateProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productId: this.props.match.params.productId,
            productName: '',
            productPrice: '',
            salePrice: '',
            productPic: '',
            productDesc: '',
        }
        this.productNameHandler = this.productNameHandler.bind(this);
        this.productPriceHandler = this.productPriceHandler.bind(this);
        this.salePriceHandler = this.salePriceHandler.bind(this);
        this.productPicHandler = this.productPicHandler.bind(this);
        this.productDescHandler = this.productDescHandler.bind(this);
        this.update = this.update.bind(this);
    }
    productNameHandler = (event) => {
        this.setState({ productName: event.target.value });
    }

    productPriceHandler = (event) => {
        this.setState({ productPrice: event.target.value });
    }
    salePriceHandler = (event) => {
        this.setState({ salePrice: event.target.value });
    }
    productPicHandler = (event) => {
        this.setState({ productPic: event.target.value });
    }
    productDescHandler = (event) => {
        this.setState({ productDesc: event.target.value });
    }

    componentDidMount() {
        AddressService.getProductById(this.state.productId).then((res) => {
            let allDetail = res.data;
            this.setState({
                productName: allDetail.productName,
                productPrice: allDetail.productPrice,
                salePrice: allDetail.salePrice,
                productPic: allDetail.productPic,
                productDesc: allDetail.productDesc
            })
        })
    }


    update = (event) => {
        event.preventDefault();
        let data = {
            productName: this.state.productName,
            productPrice: this.state.productPrice,
            salePrice: this.state.salePrice,
            productPic: this.state.productPic,
            productDesc: this.state.productDesc
        }
        AddressService.updateProduct(data, this.state.productId).then((res) => {
            alert('Product Update Successfully...');
            this.props.history.push('/admin-product-detail');
        })

    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-md-6 mt-5">
                            <img src={update} style={{width:"100%",height:"510px"}}></img>
                        </div>
                        <div className='col-md-6 mt-5 card mb-5'>
                            <div className='form-group'>
                                <label>Medicine Name</label>
                                <input type="text" className='form-control' name="productName" value={this.state.productName} onChange={this.productNameHandler}></input>
                            </div>

                            <div className='form-group'>
                                <label>Medicine Price</label>
                                <input type="number" className='form-control' name="productPrice" value={this.state.productPrice} onChange={this.productPriceHandler}></input>
                            </div>

                            <div className='form-group'>
                                <label>Sale Price</label>
                                <input type="number" className='form-control' name="salePrice" value={this.state.salePrice} onChange={this.salePriceHandler}></input>
                            </div>

                            <div className='form-group'>
                                <label>Medicine Pic Url</label>
                                <input type="url" className='form-control' name="productPic" value={this.state.productPic} onChange={this.productPicHandler}></input>
                            </div>

                            <div className='form-group'>
                                <label>Medicine Description</label>
                                <input type="text" className='form-control' name="productDesc" value={this.state.productDesc} onChange={this.productDescHandler}></input>
                            </div>

                            <button className='btn btn-outline-primary mb-5' onClick={this.update}>Update Product</button>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default UpdateProduct;