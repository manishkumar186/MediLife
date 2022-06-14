import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import LoginComponent from './component/LoginComponent';

import AdminLoginComponent from './component/AdminLoginComponent';
import HomeComponent from './component/HomeComponent';
import AboutComponent from './component/AboutComponent';
import ContactComponent from './component/ContactComponent';
import SignupComponent from './component/SignupComponent';
import AllMedicineComponent from './component/AllMedicineComponent';
import CategoryWiseProductComponent from './component/CategoryWiseProductComponent';
import Category from './component/Category';
import AddMedicineComponent from './component/AddMedicineComponent';
import AddToCart from './component/AddToCart';

import Prescription from './component/Prescription';
import AllPrescriptionDetail from './component/AllPrescriptionDetail';
import PaymentPage from './component/PaymentPage';
import AllOrderDetail from './component/AllOrderDetail';
import AdminAllProduct from './component/AdminAllProduct';
import UpdateProduct from './component/UpdateProduct';
import MyOrder from './component/MyOrder';
import userFeedback from './component/userFeedback';
import AllFeedback from './component/AllFeedback';




class App extends Component {
  constructor(props) {
    super(props)
    this.state={}
   
   }

   
  render() {
    
    return (
      <div>
        <BrowserRouter>
        <HeaderComponent></HeaderComponent>
          <Switch>
            
            <Route path="/" exact component={HomeComponent}/>
            <Route path="/about" component={AboutComponent}></Route>
            <Route path="/contact" component={ContactComponent} ></Route>
            <Route path="/medicine-list" component={AllMedicineComponent}></Route>
            <Route path="/add-category" component={Category}></Route>
            <Route path="/add-medicine" component={AddMedicineComponent}></Route>
            <Route path="/category-medicine-list/:categoryName" component={CategoryWiseProductComponent}></Route>
            <Route path="/user-login" component={LoginComponent}></Route>
            <Route path="/add-to-cart" component={AddToCart}></Route>
            <Route path="/prescription" component={Prescription}></Route>
            <Route path="/payment-page" component={PaymentPage}></Route>
            <Route path="/all-prescription" component={AllPrescriptionDetail}></Route>
            <Route path="/all-order" component={AllOrderDetail}></Route>
            <Route path="/admin-product-detail" component={AdminAllProduct}></Route>
            <Route path="/update-product-detail/:productId" component={UpdateProduct}></Route>
            <Route path="/my-order" component={MyOrder}></Route>
            <Route path="/user-feedback/:productName" component={userFeedback}></Route>
            <Route path="/all-user-feedback-detail" component={AllFeedback}></Route>
            <Route path="/admin-login" component={AdminLoginComponent}></Route>
            <Route path="/user-signup" component={SignupComponent}></Route>
          </Switch>
          <FooterComponent />
        </BrowserRouter>
      </div>


    );
  }
}

export default App;
