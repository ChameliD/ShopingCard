// here it is a class component

import React,{Component} from "react";

class Welcome extends Component{
    render(){
        return <h1> Welcome {this.props.name} your number is {this.props.num}</h1> 
    }
}

export default Welcome