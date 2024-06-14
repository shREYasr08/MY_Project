import React from 'react'
import { useState } from 'react';
import MiniProduct from './MiniProduct';

const Products = (props) => {
    const data=props.data;
    const array=props.array;
    const Setarray=props.Setarray
    const[status,Setstatus]=useState(0);

   
 return(
    data.map((item,index)=>
    {
        return(
            <div>
                <MiniProduct item={item} index={index} array={array} Setarray={Setarray}/>
                
            </div>
        )
    })
 )
}

export default Products