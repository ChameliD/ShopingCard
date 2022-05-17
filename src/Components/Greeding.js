// here it is a functional component

import React from 'react'

const Greeding=({name,num,children})=>{
return(
  <div>
    <h1>Hello {name}, Your index number is {num}</h1>
    {children}
</div>
  )}
export default Greeding