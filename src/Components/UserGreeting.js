import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggIn:true
      }
    }
  render() {
      //If else are note work inside the JSX
      //Hove to use rendera method
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
      }
    /*return (
      <div>
          <di>Welcome Chameli</di>
          <di>Welcome Guest</di>
        </div>
    )*/
  }
}

export default UserGreeting