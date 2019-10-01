// app/redux/reducers/index.js
import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';
export default combineReducers({
  products: productReducer,
  cart: cartReducer,
  order: orderReducer
})