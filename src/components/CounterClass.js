import React , {Component} from 'react'

class CounterClass extends Component {
    constructor(){
        super();
        this.state ={
            count :0,
        }
    }
    Increment(){
       
           this.setState({
            count : this.state+1
           })
       
    }
    IncrementFive(){
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
        // to get the result 
        //we need to maintain prevstate
        /*
         this.setState (prevState=>({
            count : prevstate.count+1
         }))
        */
    }



    render(){
        return(
            <div>
               <h1>count : {this.state.count}</h1> 
                <button onClick={this.Increment()}>Increment</button>
            </div>
        )
    }
}
export default CounterClass