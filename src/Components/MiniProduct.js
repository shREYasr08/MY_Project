import React, { useState } from 'react'
// import { useState } from 'react';

const MiniProduct = (props) => {
    
    const data=props.item;
    const index=props.index;
    const array=props.array;
    const Setarray=props.Setarray;
    const [stats,Setstats]=useState(0);

    function addhandler(data)
    {
        Setstats(!stats);
        Setarray((prevarray)=>[...prevarray,data])
        
    }
    console.log(array);
    function removehandler(id)
    {
        Setstats(!stats);
        Setarray((prevarray)=>
        {
            
            return(prevarray.filter((item)=>id!=item.id))
        })
        
    }
  return (
        <div>
        <img src={data.image}></img>
        <h2>{data.title}</h2>
      {stats ? <button onClick={()=>removehandler(data.id)}>Remove</button > : <button onClick={()=>addhandler(data)}>Add</button>}
    </div>)
}
  


export default MiniProduct