import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';


class App extends Component {
  render() {
    return (
      <div>
        <form onSubmit={e => {
            this.props.addToDo(e.target.newToDo.value)
            e.target.newToDo.value = ""
            e.preventDefault()
          }}>
          <input type="text" name="newToDo"></input>
          <button type="submit">Submit</button>
        </form>
        {this.props.data.map((todo, i) => <li key={i} onClick={e => this.props.markAsComplete(todo.id)} className={todo.completed ? "completed" : "incomplete"}>
          {todo.todo}
      </li>)}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state
})

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (todo) => dispatch({
      type: 'ADD_TODO',
      todo
    }),
    markAsComplete: (id) => dispatch({
      type: 'MARK_AS_COMPLETE',
      id
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
