import React from 'react'
import { useState } from 'react';

export const Counter = () => {
    const [value,SetValue]=useState(0);
    function increment()
    {
        
        SetValue(value+1);
    }
    function decrement()
    {
       
        SetValue(value-1);
    }
  return (
   
    
    <div>
        <button onClick={decrement}>  
            -
        </button>
        <div>
            {value}
        </div>
        <button onClick={increment}>
            +
        </button>
    </div>
  )
}
