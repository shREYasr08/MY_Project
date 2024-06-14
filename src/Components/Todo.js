import React from 'react'
import { useState } from 'react'

const Todo = () => {
    const[array,Setarray]=useState([]);
    const[value,Setvalue]=useState('');
    function handler(e)
    {
        Setvalue(e.target.value)
        console.log(value)
        // e.target.value='';
    }
    function addhandler()
    {
        if(value!='')
            {
                Setarray((prevarray)=>[...prevarray,value]);
                console.log(array);
                Setvalue('');
            }
        
    }
    function removehandler(index)
    {
        // console.log(index)
        Setarray((prevarray)=>
        {
            return(prevarray.filter((item,id)=>id!=index));
        })
    }
  return (
    <div>
        {/* <label for id='todo'>Enter</label> */}
       <input
       type='text'
       required
       placeholder='enter your todo'
       label="todo"
       id="todo"
      value={value}
       onChange={handler}></input>

       <button onClick={addhandler}>Add</button>
       {/* <button></button> */}
       <diV>
        {
            array.map((item,index)=>
            {
                return(<div>
                    <h3>{item}</h3>
                    <button onClick={()=>removehandler(index)}>Remove</button>
                </div>
                )
            })
        }
        </diV>
    </div>
  )
}

export default Todo