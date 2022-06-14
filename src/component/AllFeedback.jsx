import React,{Component} from 'react';
import AddressService from '../service/AddressService';


class AllFeedback extends Component{
    constructor(props){
        super(props);
        this.state={

            allFeedback:[]

        }
        
    }
    componentDidMount() {
        AddressService.allFeedback().then((res) => {
            this.setState({ allFeedback: res.data });
            
        });
    }

    render(){
        return(
            <>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-12 mt-5 card mb-3">
                        <table className='table table-bordered table-light mt-3'>
                            <thead>
                                <tr>
                                    
                                    <th>Username</th>
                                    <th>Product Name</th>
                                    <th>Feedback Detail</th>
                                    
                                </tr>
                            </thead>

                            <tbody>
                            {this.state.allFeedback.map(data =>
                                <tr>
                                    
                                    <td>{data.userName}</td>
                                    <td>{data.productName}</td>
                                    <td>{data.feedback}</td>
                                   
                                    
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
export default AllFeedback;