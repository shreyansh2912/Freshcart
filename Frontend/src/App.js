import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Categories from './Categories';
import AddCategory from './AddCategory';
import Products from './Products';
import AddProducts from './AddProducts';
import SubCategories from './SubCategories';
import AddSubCategory from './AddSubCategory';
import { createContext, useContext } from 'react';
import Cart from './Cart';
import { UserContext } from './Context/AppContext';
import SinglePro from './SinglePro';
import checkOut from './CheckOut';
import CheckOut from './CheckOut';
import ShowPro from './ShowPro';
import Wishlist from './Wishlist';

function App() {
  let uid = useContext(UserContext);
  window.oncontextmenu = ()=>{
    return false;
  }
  
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/SignIn' element={<SignIn/>}>Login</Route>
          <Route path='/SignUp' element={<SignUp/>}>Register</Route>
      </Routes>
          <Routes>
              <Route path='/' element={<Home/>}>Home</Route>
              <Route path='dashboard' element={<Dashboard/>}></Route>
              <Route path='/Categories' element={<Categories/>}></Route>
              <Route path='/Add-Categories' element={<AddCategory/>}></Route>
              <Route path='/Products' element={<Products/>}></Route>
              <Route path='/AddProducts' element={<AddProducts/>}></Route>
              <Route path='/SubCategories' element={<SubCategories/>}></Route>
              <Route path='/AddSubCategories' element={<AddSubCategory/>}></Route>
              <Route path='/Cart' element={<Cart/>}></Route>
              <Route path='/Product' element={<SinglePro/>}/>
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='/checkout' element={<CheckOut/>}></Route>
              <Route path='/ShowProduct' element={<ShowPro/>}></Route>
              <Route path='/WishList' element={<Wishlist/>}></Route>
          </Routes>
      </BrowserRouter>
      <Footer />
    </>
   
  );
}

export default App;
