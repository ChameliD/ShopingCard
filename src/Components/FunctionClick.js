//rfce for function components

import React from 'react'

function FunctionClick() {
  //we can define a function within a function in javaScript
  function clickHandler(){
    console.log('Button click')
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick