// here it is a functional component

import React from 'react'

const Greeding=(props)=>{
return(
  <div>
    <h1>Hello {props.name}, Your index number is {props.num}</h1>
    {props.children}
  </div>
  )}
export default Greeding