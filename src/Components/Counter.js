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
        /*this.setState({
            count:this.state.count+1
        },//second parameter in the setState method
        ()=>{
            console.log('Callback value',this.state.count) //callback log
        })
*/
        /*this.setState(prevState=>({
            count:prevState.count+1
        }))*/

        this.setState((prevState,props)=>({
            count:prevState.count+1
        }))

        console.log(this.state.count) //synchronous log
    }
    incremenFive(){
       
       /* this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()*/
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