import React, {Component} from 'react';
import './counterbutton.css';
class CounterButton extends Component {

    constructor(){
        super();
        this.state = {
            count : 0,
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps, nextState)
        if(this.state.count !== nextState.count){
            return true
        }
        return false;
    }

    updateCount = () => {
        this.setState(state => {
            return { count: this.state.count + 1 }
        })
    }

    render(){
        console.log('CounterButton')
        return (
            <div className='text-center w-100'>
                <button className="btn btn-success" color = { this.props.color } onClick={this.updateCount}>
                    Count: {this.state.count}
                </button>
            </div>
        )
    }

}
export default CounterButton