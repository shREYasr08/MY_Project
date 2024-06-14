import React from 'react'
import { Link} from 'react-router-dom'
import './cart.css'
import { Route,Routes } from 'react-router-dom';
import About from './About';
import Home from './Home'
import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import Products from './Products';
import { data } from './data';
import Finalcart from './Finalcart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate=useNavigate();
    const [islogin,Setislogin]=useState(false);
    const[array,Setarray]=useState([]);
    function logouthandler()
    {
        Setislogin(!islogin);
        navigate('/home')
    }
  return (
    <div >
        <navbar className='navebar'>
            <Link to='/home'><img  src='https://cdn-icons-png.flaticon.com/512/1413/1413908.png' width="50" height="60"></img></Link>
           <div className='mini'>
           <Link to='/home'><h2>Home</h2>
                </Link>
                <Link to='/about'><h2>About</h2>
                </Link>
           </div>
                
          
            <div>
           <Link to='/login'>  {!islogin && <button>LogIn</button>}  </Link>
            <Link to='/signin'>{!islogin && <button>Signup</button>}</Link>
            <Link to='/finalcart'>{islogin && <button>Cart</button>}</Link>
            <Link to='/logout'>{islogin &&<button onClick={logouthandler}>Logout</button>}</Link>
            </div>
            </navbar>

            <Routes>

              <Route path='/home' element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/login' element={<Login islogin={islogin} Setislogin={Setislogin}/>}></Route>
              <Route path='/signin' element={<Signup/>}></Route>
              <Route path='/cart' element={<Products  data={data} array={array} Setarray={Setarray}/> }></Route>
              <Route path='/finalcart' element={<Finalcart array={array} Setarray={Setarray}/>}></Route>

            </Routes>
    </div>
  )
}

export default Cart