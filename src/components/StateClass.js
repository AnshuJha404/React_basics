import React ,{Component} from 'react'
{ /*
class StateClass extends Component {

    constructor(){
        super();
        this.state = {
            message : "welcome Anshu"
        }
    }
    changeMessage=()=>{
        this.setState({
            message : "thankyou for click"
        })
    }

render(){

    return (
        <div>
            {this.state.message}
            <button onClick={()=>this.changeMessage()}>click me</button>
        </div>
    )
}

}
export default StateClass */}


class StateClass extends Component{

    constructor(){
        super()
        this.state ={
            message : "welcome bro"
        }
    }
    changeMessage =()=>{
        this.setState({
            message : " hogya click"
        })

    }
    render()
    {return (
        <div>
            {this.state.message}
            <button onClick={()=>{this.changeMessage()}}>click me</button>
        </div>
    )}

}
export default StateClass