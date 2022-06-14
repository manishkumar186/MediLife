import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import AddressService from '../service/AddressService';


class AllPrescriptionDetail extends Component{
    constructor(props){
        super(props);
        this.state={

            prescription:[]

        }
        
    }
    componentDidMount() {
        AddressService.getPrescription().then((res) => {
            
            this.setState({ prescription: res.data });
            
        });
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
                                    <th>Prescription Name</th>
                                    <th>Prescription Link</th>
                                    <th>Type</th>
                                    <th>File Size</th>
                                </tr>
                            </thead>

                            <tbody>
                            {this.state.prescription.map(data =>
                                <tr>
                                    <td>{data.name}</td>
                                    <td><Link to={data.url}>{data.url}</Link></td>
                                    <td>{data.type}</td>
                                    <td>{data.size}</td>
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
export default AllPrescriptionDetail;