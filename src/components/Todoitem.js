import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
getstyle=()=>{
    return {
        background:'#ccc',
        padding:'10px',
        borderBottom:'1px black dotted',
        textDecoration:this.props.todo.completed ?
        'line-through':'none'
    };
};
// markcomplete=(e)=>{
//     console.log(this.props);
// }
componentDidMount=(props)=>{
  console.log(this.props.todo);
}

  render() {
      const {id,title,completed}=this.props.todo;
    return (
      <div style={this.getstyle()}>
          <p> 
              <input type='checkbox' 
              defaultChecked={completed}
              onChange={this.props.markcomplete.bind(this,id)}/>{' '}
              { title }
              <button 
              style={btnStyle} 
              onClick={this.props.delTodo.bind(this,id)}>
              X
              </button>
               </p>
      </div>
    );
  }
}
//Proptypes
Todoitem.propTypes={
    todo:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired
};
const btnStyle={
  background:'#ff0000',
  color:'#fff',
  border:'none',
  padding:'5px 10px',
  borderRadius:'50%',
  cursor:'pointer',
  float:'right'
}
// const itemstyle={
//     backgroundColor:'orange'
// }


export default Todoitem