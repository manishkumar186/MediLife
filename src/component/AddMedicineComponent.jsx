import React, {Component} from 'react';
import AddressService from '../service/AddressService';

class AddMedicineComponent extends Component{

    constructor(props){
        super(props)

        this.state={

            productName:'',
            productPrice:'',
            salePrice:'',
            productPic:'',
            productDesc:'',
            categoryName:'',

            category:[]

            


        }

        this.productNameHandler = this.productNameHandler.bind(this);
        this.productPriceHandler = this.productPriceHandler.bind(this);
        this.salePriceHandler = this.salePriceHandler.bind(this);
        this.productPicHandler = this.productPicHandler.bind(this);
        this.productDescHandler = this.productDescHandler.bind(this);
        this.categoryHandler = this.categoryHandler.bind(this);
        this.addProduct = this.addProduct.bind(this);
        
    
    }

    productNameHandler = (event)=>{
        this.setState({productName:event.target.value});
    }

    productPriceHandler = (event)=>{
        this.setState({productPrice:event.target.value});
    }
    salePriceHandler = (event)=>{
        this.setState({salePrice:event.target.value});
    }
    productPicHandler = (event)=>{
        this.setState({productPic:event.target.value});
    }
    productDescHandler = (event)=>{
        this.setState({productDesc:event.target.value});
    }
    categoryHandler=(event)=>{
        this.setState({categoryName:event.target.value});
    }


    componentDidMount() {
        AddressService.getAllCategory().then((res) => {
            this.setState({ category: res.data });

        });
    }

    addProduct=(event)=>{
        event.preventDefault();
        if(this.state.productName==''){
            alert('Please Enter Product Name...');
        }
        else if(this.state.productPrice==''){
            alert('Please Enter Product Price...');
        }
        else if(this.state.salePrice==''){
            alert('Please Enter Sale Price...');
        }
        else if(this.state.productPic==''){
            alert('Please Enter Product Image Url...');
        }
        else if(this.state.productDesc==''){
            alert('Please Enter Product Description...');
        }
        else{
            let data={productName:this.state.productName,productPrice:this.state.productPrice,salePrice:this.state.salePrice,productPic:this.state.productPic,productDesc:this.state.productDesc,categoryName:this.state.categoryName} 
            AddressService.addProduct(data).then(res=>{
                alert("Medicine Added Successfully !!!");
                this.props.history.push("/");
    
            })
        }
        
    }
    render(){
        return(
            <>
            <div className="container">
                    <form>
                        <div className='row mt-3'>
                            <div className='col-md-6 mx-auto mt-5 card mb-5'>
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
                                
                                <div className='form-group'>
                                
                                    <labe>Select Category </labe>
                                    
                                    <select value={this.state.categoryName} className='form-control' onChange={this.categoryHandler} name="categoryName">
                                    {this.state.category.map(data =>
                                        <option>{data.categoryName}</option>
                                        
                                    )}
                                    </select>
                                
                                    
                                </div>
                                

                                <button className='btn btn-outline-success mb-5' onClick={this.addProduct}>Add Product</button>

                            </div>
                        </div>
                    </form>
                </div>
            
            </>
        )
    }

}
export default AddMedicineComponent;