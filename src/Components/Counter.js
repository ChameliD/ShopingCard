// rec

import React, { Component } from 'react'



export class Counter extends Component {
    //rconst
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    //never modify th state directly
    //need to use setstate
    increment(){
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <div>
          <div>Count - {this.state.count}</div>
          <button onClick={()=>this.increment()}>Increment</button>

      </div>
    )

    
  }
}

export default Counter