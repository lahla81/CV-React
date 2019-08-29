import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state ={
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({ hasError: true})
    }

    render(){
        if(this.state.hasError){
            return <p className="text-red">Ooops, Thats is not good</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundry;