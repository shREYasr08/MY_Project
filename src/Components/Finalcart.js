import React from 'react'

const Finalcart = (props) => {
    const array=props.array;
    const Setarray=props.Setarray;

    function removehandler(id)
    {
        Setarray((prev)=>prev.filter((item)=>id!=item.id))
    }
  return (
    array.map((item)=>
        {
            return(
                <div>
                    <img src={item.image}></img>
                <h2>{item.title}</h2>
                <button onClick={()=>removehandler(item.id)}>Remove</button>
                    
                </div>
            )
        })
    )
}

export default Finalcart