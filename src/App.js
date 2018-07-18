import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {addToDo, removeToDo} from './actions';

const mapDispatchToProps = dispatch => {
  return {
    addToDo: () => dispatch(addToDo()),
    removeToDo: () => dispatch(removeToDo())
  };
};

const mapStateToProps = state => {
  return {
    todos: state
  }
}

class App extends Component {
  onAddHandler(event) {
    this.props.addToDo();
  }

  onRemoveHandler(event){
    this.props.removeToDo();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React </h1>
        </header>
        <ul>
            {
              this.props.todos.map(todo=>{
                return (<li key={todo.key}>{todo.value}</li>);
              })
            }
          </ul>
        <input type="button" value="add" onClick={this.onAddHandler.bind(this)} />
        <input type="button" value="remove" onClick={this.onRemoveHandler.bind(this)} />
      </div>
    );
  }
}

const AppRedux = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppRedux;
