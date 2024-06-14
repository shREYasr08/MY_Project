import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const islogin=props.islogin;
    const data=props.data;
    const Setislogin=props.Setislogin;
    const navigate=useNavigate()

    function handler(e)
    {
        e.preventDefault();
        Setislogin(!islogin)
        navigate('/cart');
        
    }
  return (
    <div>
        <form onSubmit={handler}>
            <label for='firstname'>Enter First Name</label>
            <br/>
            <input type='text'
            required
            placeholder='First Name'
            id='firstname'
            name='firstname'
            >
            </input>
            <br/>

            <label for='Lastname'>Enter Last Name</label>
            <br/>
            <input type='text'
            required
            placeholder='Last Name'
            id='lastname'
            name='lastname'
            >
             </input>

<br/>
<label for='email'>enter email</label>
<br/>
             <input
                required
                type='email'
                placeholder='email'
                id='email'
                name='email'
                    >
                </input>

                <button>Submit</button>
        </form>
    </div>

  )
}

export default Login