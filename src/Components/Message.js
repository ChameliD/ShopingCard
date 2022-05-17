// here it is a class component

import React,{Component} from "react";
import Counter from "./Counter";

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"Welcome visitor"

        }
    }
    changeMessag(){
        this.setState({
            message:"Thank you for subcribing"
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessag()}>Subcribe</button> 
                
                
            </div>)
    }
}

export default Message