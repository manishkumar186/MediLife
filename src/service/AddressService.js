import axios from 'axios';

const signup_API_BASE_URL = "http://localhost:9090/registerNewUser";
const login_API_BASE_URL = "http://localhost:9090/authenticate";

const all_PRODUCT_BASE_URL = "http://localhost:9092/product/allProduct";
const GET_PRODUCT_BY_CATEGORYID = "http://localhost:9092/product/category?categoryName=";
const ADD_PRODUCT = "http://localhost:9092/product/addProduct";
const DELETE_PRODUCT_BYADMIN = "http://localhost:9092/product/deleteproduct";
const GET_PRODUCT_BY_ID = "http://localhost:9092/product";
const UPDATE_PRODUCT ="http://localhost:9092/product/updateproduct";

const all_CATEGORY_BASE_URL =  "http://localhost:9091/category/allCategory";
const ADD_CATEGORY_BASE_URL = "http://localhost:9091/category/addCategory";

const ADD_TO_CART = "http://localhost:9093/cart/addToCart"
const GET_CART_DETAIL_BY_USERNAME = "http://localhost:9093/cart/cartDetail?userName=";
const DELETE_CART_BY_ID = "http://localhost:9093/cart/cartDetail";

const ADD_ORDER_DETAIL = "http://localhost:9094/orderDetail/addOrder";
const ALL_ORDER_DETAIL = "http://localhost:9094/orderDetail/allOrder";
const ORDER_DELETE_BY_ADMIN = "http://localhost:9094/orderDetail/order";
const GET_ORDER_DETAIL_BY_USERNAME = "http://localhost:9094/orderDetail/userOrderDetail?userName=";

const PRESCRIPTION_UPLOAD = "http://localhost:8080/upload";
const ALL_PRESCRIPTION_FILES = "http://localhost:8080/files";

const USER_ADD_FEEDBACK = "http://localhost:9094/addFeedback";
const ALL_FEEDBACK = "http://localhost:9094/allFeedback";


class AddressService {
    createSignup(registerNewUser){
        return axios.post(signup_API_BASE_URL, registerNewUser);
    }

    createLogin(loginData){
        return axios.post(login_API_BASE_URL, loginData);
    }

    getAllMedicine(){
        return axios.get(all_PRODUCT_BASE_URL);
    }

    getAllCategory(){
        return axios.get(all_CATEGORY_BASE_URL);
    }

    getProductByCategory(categoryName){
        return axios.get(GET_PRODUCT_BY_CATEGORYID + categoryName);
        
    }
    addCategory(addCategory){
        return axios.post(ADD_CATEGORY_BASE_URL,addCategory);
    }

    addProduct(addProduct){
        return axios.post(ADD_PRODUCT,addProduct);
    }

    addToCart(cartDetail){
        return axios.post(ADD_TO_CART,cartDetail);
    }

    getCartByUserName(userName){
        return axios.get(GET_CART_DETAIL_BY_USERNAME + userName);
        
    }

    deleteCartDetail(cartId){
        return axios.delete(DELETE_CART_BY_ID +'/'+cartId)
    }

    addOrderDetail(orderDetail){
        return axios.post(ADD_ORDER_DETAIL,orderDetail);
    }

    prescriptionUpload(data){
        return axios.post(PRESCRIPTION_UPLOAD,data);
    }

    getPrescription(){
        return axios.get(ALL_PRESCRIPTION_FILES);
    }

    getAllOrderDetail(){
        return axios.get(ALL_ORDER_DETAIL);
    }

    deleteOrderDetail(orderId){
        return axios.delete(ORDER_DELETE_BY_ADMIN +'/'+ orderId);
    }

    deleteProductById(productId){
        return axios.delete(DELETE_PRODUCT_BYADMIN+'/'+productId);
    }

    getProductById(productId){
        return axios.get(GET_PRODUCT_BY_ID+'/'+productId);
    }
    updateProduct(product, productId){
        return axios.put( UPDATE_PRODUCT+'/'+productId,product)
    }
    getOrderByUserName(userName){
        return axios.get(GET_ORDER_DETAIL_BY_USERNAME + userName);
        
    }
    addFeedback(feedback){
        return axios.post(USER_ADD_FEEDBACK,feedback);
    }
    allFeedback(){
        return axios.get(ALL_FEEDBACK);
    }

}
export default new AddressService();