import React, { Component } from 'react'
import AddressService from '../service/AddressService';


class Category extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categoryName: '',
            categoryPic: '',
            categoryDesc: ''

        }

        this.categoryNameHandler = this.categoryNameHandler.bind(this);
        this.categoryPicHandler = this.categoryPicHandler.bind(this);
        this.categoryDescHandler = this.categoryDescHandler.bind(this);

        this.addCategory = this.addCategory.bind(this);


    }

    categoryNameHandler = (event) => {
        this.setState({ categoryName: event.target.value });
    }

    categoryPicHandler = (event) => {
        this.setState({ categoryPic: event.target.value });
    }
    categoryDescHandler = (event) => {
        this.setState({ categoryDesc: event.target.value });
    }

    addCategory = (event) => {
        event.preventDefault();
        if (this.state.categoryName == '') {
            alert('Please Enter Category Name....')
        }
        else if (this.state.categoryPic == '') {
            alert('Please Enter Category Pic....')
        }
        else if (this.state.categoryDesc == '') {
            alert('Please Enter Category Description...')
        }
        else {
            let categoryData = { categoryName: this.state.categoryName, categoryPic: this.state.categoryPic, categoryDesc: this.state.categoryDesc }
            AddressService.addCategory(categoryData).then(res => {
                this.props.history.push("/")
            })
        }



    }

    render() {
        return (
            <>
                <div className="container">
                    <form>
                        <div className='row mt-5'>
                            <div className='col-md-6 mx-auto mt-5 card mb-5'>
                                <div className='form-group'>
                                    <label>Category Name</label>
                                    <input type="text" className='form-control' name="categoryName" value={this.state.categoryName} onChange={this.categoryNameHandler}></input>
                                    <small><mark style={{ backgroundColor: "yellow" }}>Please add category Name atleast two words. like this : <b>Pain-Killer </b></mark></small>
                                </div>

                                <div className='form-group'>
                                    <label>Category Url</label>
                                    <input type="url" className='form-control' name="categoryPic" value={this.state.categoryPic} onChange={this.categoryPicHandler}></input>
                                </div>

                                <div className='form-group'>
                                    <label>Category Description</label>
                                    <input type="text" className='form-control' name="categoryDesc" value={this.state.categoryDesc} onChange={this.categoryDescHandler}></input>
                                </div>

                                <button className='btn btn-outline-success mb-5' onClick={this.addCategory}>Add Category</button>

                            </div>
                        </div>
                    </form>
                </div>
            </>
        )

    }
}
export default Category;