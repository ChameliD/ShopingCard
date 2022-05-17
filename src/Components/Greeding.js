// here it is a functional component

import React from 'react'

const Greeding= props=>{
  const{name,num,children}=props
return(
  <div>
    <h1>Hello {name}, Your index number is {num}</h1>
    {children}
</div>
  )}

/*const Greeding=({name,num,children})=>{
return(
  <div>
    <h1>Hello {name}, Your index number is {num}</h1>
    {children}
</div>
  )}*/

export default Greeding