import { Component } from "react";

export default class Names extends Component{
    componentDidMount(){
        console.log()
    }
    render(){
        return(<>{this.props.children}</>)
    }
}