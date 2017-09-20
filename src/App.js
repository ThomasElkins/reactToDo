import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';


class App extends Component {
  render() {
    return (
      <div>{this.props.data.map((todo, i) => <li key={i}>
          {todo.todo}
      </li>)}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state
})

export default connect(
  mapStateToProps
)(App)
