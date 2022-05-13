import React from "react";

const Hello=()=>{
  //  return(
    //    <div id='hello' className:'dummyClass'>Hello </div>
    //)

    return React.createElement(
        'div',
        {id:'hello',className:"dummyClass"},
        React.createElement('h2',null,"Hello"))
}

export default Hello