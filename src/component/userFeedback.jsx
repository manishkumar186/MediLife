import React, {Component} from 'react'
import AddressService from '../service/AddressService';
class userFeedback extends Component{
    constructor(props){
        super(props)
        this.state={
            feedback:'',
            productName: this.props.match.params.productName

        }
        this.feedback = this.feedback.bind(this);
        this.changeFeedbackHandler = this.changeFeedbackHandler.bind(this);
    }
    changeFeedbackHandler=(event)=>{
        this.setState({feedback:event.target.value})
    }

    feedback=(event)=>{
        event.preventDefault();
        const details = JSON.parse(localStorage.getItem('detail'));
        let feedbackDetail={feedback:this.state.feedback,userName:details,productName:this.state.productName}
        AddressService.addFeedback(feedbackDetail).then(res=>{
            alert("Your Feedback Submitted successfully....");
            this.props.history.push('/my-order');
        })
    }

    render(){
        return(
            <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 mt-5 mx-auto card mb-2">
                        <div className='form-group'>
                            <label>Feedback</label>
                            <textarea className='form-control' name="feedback" onChange={this.changeFeedbackHandler} value={this.state.feedback}></textarea>
                            <button className='btn btn-success mt-2' onClick={this.feedback}>Submit</button>                        
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default userFeedback;