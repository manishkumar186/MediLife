import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import AddressService from '../service/AddressService';


class AllOrderDetail extends Component{
    constructor(props){
        super(props);
        this.state={

            orderDetail:[]

        }

        this.deleteOrderDetail= this.deleteOrderDetail.bind(this);
        
    }
    componentDidMount() {
        AddressService.getAllOrderDetail().then((res) => {
            this.setState({ orderDetail: res.data });
            
        });
    }

    deleteOrderDetail(orderId){
        AddressService.deleteOrderDetail(orderId).then(res=>{
            this.setState({ orderDetail: this.state.orderDetail.filter(order => order.orderId !== orderId) });
            alert("Order deleted successfully ....");
        })
    }
    render(){
        return(
            <>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-12 mt-5">
                        <table className='table table-bordered table-light'>
                            <thead>
                                <tr>
                                    
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Address</th>
                                    <th>Product Name</th>
                                    <th>Product Price</th>
                                    <th>Product Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                            {this.state.orderDetail.map(data =>
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.userName}</td>
                                    <td>{data.email}</td>
                                    <td>{data.contact}</td>
                                    <td>{data.address}</td>
                                    <td>{data.productName}</td>
                                    <td>{data.productPrice}</td>
                                    <td><img src={data.productPic} style={{height:"100px"}}></img></td>
                                    <td><button className="btn btn-danger" onClick={() => this.deleteOrderDetail(data.orderId)}>Remove</button></td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default AllOrderDetail;