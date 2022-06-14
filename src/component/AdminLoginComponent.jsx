import React, { Component } from 'react'
import loginImages from '../Images/login images.jpg'
import { withRouter } from 'react-router-dom';
import AddressService from '../service/AddressService';
import axios from 'axios';

class AdminLoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            userPassword: '',

        }

        this.usernameHandler = this.usernameHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.login = this.login.bind(this);

    }

    usernameHandler = (event) => {
        this.setState({ userName: event.target.value });
    }

    passwordHandler = (event) => {
        this.setState({ userPassword: event.target.value });
    }

    login = (event) => {
        event.preventDefault();
        if (this.state.userName == '') {
            alert("Please Enter Usename....")
        }
        else if (this.state.userPassword == '') {
            alert("Please Enter Password....")
        }
        else {
            let datas = { userName: this.state.userName, userPassword: this.state.userPassword };
            AddressService.createLogin(datas).then(res => {

                localStorage.setItem('jwtToken', res.data.jwtToken);
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('jwtToken')
                    }
                };
                axios.get('http://localhost:9090/forAdmin?userName=' + datas['userName'], config).then(
                    response => {
                        localStorage.setItem('adminDetail', JSON.stringify(response.data.userName));
                        this.props.history.push("/");
                    }
                )

            })
        }

    }

    render() {
        return (
            <>
                <div className='container-fluid' style={{ marginTop: "56px" }}>
                    <div className='row'>
                        <div className='col-md-6 card p-0'>
                            <img src={loginImages} style={{ width: "100%", height: "300px" }}></img>
                        </div>

                        <div className='col-md-6 card'>
                            <form>
                                <div className='from-group'>
                                    <label>Username</label>
                                    <input type="text" placeholder='Enter Username' name="userName" required className='form-control' onChange={this.usernameHandler} value={this.state.userName} />
                                </div>
                                <div className='from-group'>
                                    <label>Password</label>
                                    <input type="password" placeholder='Enter Password' name="userPassword" required className='form-control' onChange={this.passwordHandler} value={this.state.userPassword}></input>
                                </div>
                                <div>
                                    <button type="button" className='btn btn-success mt-3 mr-5' onClick={this.login}>Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>



            </>
        )
    }
}
export default withRouter(AdminLoginComponent);