import React, { Component } from 'react';
import ladydoc from '../Images/ladydoc.png';
import AddressService from '../service/AddressService';



class Prescription extends Component {
    constructor(props){
        super(props)
        this.state={

            selectedFiles:''
            

        }

        this.imageHandler = this.imageHandler.bind(this);
        this.imageUpload = this.imageUpload.bind(this);
        
    }
    imageHandler = (events)=>{
        this.setState({selectedFiles:events.target.files[0]})
        
    }
    imageUpload=(event)=>{
        event.preventDefault();
        const formData = new FormData();

        formData.append("file",this.state.selectedFiles);
       AddressService.prescriptionUpload(formData).then(res=>{
           alert("Prescription upload sucessfully...")
           this.props.history.push('/');
       })

    }


    render() {
        return (
            <>

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6">
                           <img src= {ladydoc} style={{ width: "100%", height: "450px" }} alt="prescription image"></img> 
                        </div>
                        <div className="col-md-6 mt-5">
                            <div className='form-group'>
                                <label for="formFile" class="form-label">Upload Prescription(Max 200MB)</label>
                                <input class="form-control" type="file" name="file" className='form-control' onChange={this.imageHandler}></input>

                                
                                <button className='btn btn-primary mt-3' onClick={this.imageUpload}>Upload</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )


    }
}
export default Prescription;