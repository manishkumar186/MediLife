import React,{ Component } from 'react';
import AddressService from '../service/AddressService';

class AdminAllProduct extends Component{
    constructor(props) {
        super(props)

        this.state = {

            product:[]
        }

        this.deleteProduct = this.deleteProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        

    }

    componentDidMount() {
        AddressService.getAllMedicine().then((res) => {
            this.setState({ product: res.data });
            
        });
    }
    deleteProduct(productId) {
        AddressService.deleteProductById(productId).then((res) => {
            this.setState({ product: this.state.product.filter(productDetail => productDetail.productId !== productId) });
            alert("Product deleted successfully");
        })

    }
    updateProduct(productId){
        this.props.history.push(`/update-product-detail/${productId}`);

    }
    

    render(){
        return(
            <>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-12 mt-5">
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Product Price</th>
                                    <th>Sale Price</th>
                                    <th>Product Picture</th>
                                    <th>Product Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.product.map(data=>
                                <tr>
                                    <td>{data.productName}</td>
                                    <td>{data.productPrice}</td>
                                    <td>{data.salePrice}</td>
                                    <td><img src={data.productPic} style={{height:"100px"}}></img></td>
                                    <td>{data.productDesc}</td>
                                    <td>
                                    <button className='btn btn-danger mr-2' onClick={() => this.deleteProduct(data.productId)}>Delete</button>
                                    <button className='btn btn-primary' onClick={() => this.updateProduct(data.productId)}>Update</button></td>
                                </tr>
                                )
    }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default AdminAllProduct;