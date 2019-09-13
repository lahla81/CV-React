import React, {Component} from 'react';

class SecHeaders extends Component {

  shouldComponentUpdate(nextProps, nextState){
    if(this.props.name !== nextProps.name){
      return true
    }
    return false;
  }

  render(){
    console.log('SecHeaders')
    const { name } = this.props
    return (
      <div className="title text-center">
          <h2>{name}</h2>
      </div>
    )
  }

}
export default SecHeaders