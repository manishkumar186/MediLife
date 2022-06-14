import React, {Component} from 'react'
import AddressService from '../service/AddressService';

class MyOrder extends Component{
    constructor(props){
        super(props)
        this.state={
            myOrderDetail:[]

        }
        this.feedback = this.feedback.bind(this);
    }

    componentDidMount() {
        AddressService.getOrderByUserName(JSON.parse(localStorage.getItem('detail'))).then((res) => {
            this.setState({ myOrderDetail: res.data });


        });
    }

    feedback=(productName)=>{
        this.props.history.push(`/user-feedback/${productName.replace(/ /g,"-")}`);
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
                                    <th>Product Name</th>
                                    <th>Total Price</th>
                                    <th>Product Image</th>
                                    <th>Status</th>
                                    <th>Give Feedback</th>
                                    
                                </tr>
                            </thead>

                            <tbody>
                            {this.state.myOrderDetail.map(data =>
                                <tr>
                                    <td>{data.productName}</td>
                                    <td>{data.productPrice}</td>
                                    <td><img src={data.productPic} style={{height:"100px"}}></img></td>
                                    <td><button className='btn btn-success'>Success</button></td>
                                    <td><button className='btn btn-primary' onClick={() => this.feedback(data.productName)}>Feedback</button></td>
                                    
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
export default MyOrder;