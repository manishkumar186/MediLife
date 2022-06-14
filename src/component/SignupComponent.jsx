import React, { Component } from 'react'
import signup_image from '../Images/signup_image.jpg'
import AddressService from '../service/AddressService';
class SignupComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            userFirstName: "",
            userLastName: "",
            userName: "",
            userPassword: "",
            userEmail: "",
            userContact: "",
            userPincode: "",
            userGender: "",
            userAddress: ""
        }
        this.changeUserFirstNameHandler = this.changeUserFirstNameHandler.bind(this);
        this.changeUserLastNameHandler = this.changeUserLastNameHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeUserPasswordHandler = this.changeUserPasswordHandler.bind(this);
        this.changeUserEmailHandler = this.changeUserEmailHandler.bind(this);
        this.changeUserContactHandler = this.changeUserContactHandler.bind(this);
        this.changeUserPincodeHandler = this.changeUserPincodeHandler.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.changeUserAddressHandler = this.changeUserAddressHandler.bind(this);
        
        this.register = this.register.bind(this);
    }

    changeUserNameHandler = (event)=>{
        this.setState({userName:event.target.value});
    }

    changeUserFirstNameHandler = (event)=>{
        this.setState({userFirstName:event.target.value});
    }

    changeUserLastNameHandler = (event)=>{
        this.setState({userLastName:event.target.value});
    }

    changeUserPasswordHandler = (event)=>{
        this.setState({userPassword:event.target.value});
    }
    changeUserContactHandler = (event)=>{
        this.setState({userContact:event.target.value});
    }
    changeUserEmailHandler = (event)=>{
        this.setState({userEmail:event.target.value});   
    }
    changeUserPincodeHandler = (event)=>{
        this.setState({userPincode:event.target.value});
    }
    onChangeValue = (event)=>{
        this.setState({userGender:event.target.value});
    }
    changeUserAddressHandler = (event)=>{
        this.setState({userAddress:event.target.value});
    }

    register = (event) =>{
        event.preventDefault();
        if(this.state.userFirstName==''){
            alert("Please Enter First Name...")
        }else if(this.state.userLastName==''){
            alert("Please Enter Last Name...")
        }else if(this.state.userName==''){
            alert("Please Enter Username...")
        }else if(this.state.userPassword==''){
            alert("Please Enter Password...")
        }else if(this.state.userEmail==''){
            alert("Please Enter Email...")
        }else if(this.state.userContact==''){
            alert("Please Enter Contact Number...")
        }else if(this.state.userAddress==''){
            alert("Please Enter Address...")
        }else if(this.state.userPincode==''){
            alert("Please Enter Pincode...")
        }
        else{
            let data = {userName:this.state.userName,userFirstName:this.state.userFirstName, userLastName:this.state.userLastName, userEmail:this.state.userEmail,userPassword:this.state.userPassword,userContact:this.state.userContact,userGender:this.state.userGender,userAddress:this.state.userAddress,userPincode:this.state.userPincode};
            AddressService.createSignup(data).then(res =>{
                alert("Account Created Successfully !!!!");
                this.props.history.push('/user-login');
            })
        }
        
    }
    render() {
        return (
            <>
                <div className='container-fluid' style={{ marginTop: "55px" }}>
                    <div className='row'>
                        <div className='col-md-6 p-0'>
                            <img src={signup_image} style={{ width: "100%", height: "535px" }}></img>

                        </div>
                        <div className='col-md-6 card p-3'>
                            <form>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <label>First Name</label>
                                            <input type="text" className='form-control' name="userFirstName" required placeholder='Enter First Name' onChange={this.changeUserFirstNameHandler} value={this.state.userFirstName}></input>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <label>Last Name</label>
                                        <input type="text" className='form-control' name="userLastName" required placeholder='Enter Last Name' onChange={this.changeUserLastNameHandler} value={this.state.userLastName}></input>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <label>Username</label>
                                            <input type="text" className='form-control' name="userName" required placeholder='Enter Username' onChange={this.changeUserNameHandler} value={this.state.userName}></input>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <label>Email</label>
                                            <input type="email" className='form-control' name="userEmail" required placeholder='Enter Email Id' onChange={this.changeUserEmailHandler} value={this.state.userEmail}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <label>Password</label>
                                            <input type="password" className='form-control' name="userPassword" required placeholder='Enter Password' onChange={this.changeUserPasswordHandler} value={this.state.userPassword}></input>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <label>Contact</label>
                                            <input type="tel" className='form-control' name="userContact" required placeholder='Enter Contact Number' onChange={this.changeUserContactHandler} value={this.state.userContact}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <label>Pincode</label>
                                            <input type="number" className='form-control' name="userPincode" required placeholder='Enter Pincode Number' onChange={this.changeUserPincodeHandler} value={this.state.userPincode}></input>
                                        </div>
                                    </div>
                                    <div onChange={this.onChangeValue} className='col-md-6'>
                                        <label>Gender</label><br></br>
                                        <input type="radio" value="Male" name="userGender" value="Male"/> <label className='mr-3'>Male</label>
                                        <input type="radio" value="Female" name="userGender" value="Female" /> Female
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label>Address</label>
                                    <textarea className='form-control' name="userAddress" required onChange={this.changeUserAddressHandler} value={this.state.userAddress}>Address</textarea>
                                </div>

                                <button type="submit" className='btn btn-success mb-2' onClick={this.register}>Submit</button>

                            </form>
                        </div>
                    </div>

                </div >
            </>
        )


    }
}
export default SignupComponent;