import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggIn:false
      }
    }
  render() {
      //If else are note work inside the JSX
      //Hove to use rendera method


      /*
      ************Approach 1-if else*******************
      let message
      if(this.state.isLoggIn){
          message=<div>Welcome Chameli</div>
      }
      else{
          message=<div>Welcome Guest</div>
      }
      *************************************************


      ************Approach 2-if else*******************
      if(this.state.isLoggIn){
          return(
            <di>Welcome Chameli</di>
          )
      }
      else
      {
          return(
            <di>Welcome Guest</di>
          )

     ***************************************************
      }*/
    return this.state.isLoggIn ?(
    /*************Approach 3-if else********************/ 
      <div>
          {/*message  from Approach 1*/}
          Welcome Chameli
        </div>):(
        <div>
            Welcome Guest
        </div>
        )
   
  }
}

export default UserGreeting