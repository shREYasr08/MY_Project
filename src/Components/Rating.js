import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { useState } from 'react';
import './rating.css'


const Rating = () => {
 const [array,Setarray]=useState(Array(5).fill(null))
 const[select,Setselect]=useState(null);
 const[value,Setvalue]=useState(null);
 function clickhandler(index)
 {
    Setselect(index);
    Setvalue(index);
 }
 function mouseinhandler(index)
 {
    Setselect(index);
 }
 function mouseleavehandler()
 {
    Setselect(value)
 }
  return (
    array.map((item,index)=>
    {
        index=index+1;
        return(<FaRegStar className={select >=index? 'active':'passive'}  
            onClick={()=>clickhandler(index)}
            onMouseEnter={()=>mouseinhandler(index)}
            onMouseLeave={mouseleavehandler}
            />)
    })
  )
}

export default Rating
