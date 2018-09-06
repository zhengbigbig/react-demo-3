import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'normalize.css'
import 'reset.css'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'



class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            newTodo:'test',
            todoList:[
                {id:1,title:'第一个待办'},
                {id:2,title:'第二个待办'}
            ]
        }
    }
    render() {
        let todos = this.state.todoList.map((item,index)=>{
            return <li>{item.title}</li>
            return (
                <li>
                    <TodoItem todo={item}/>
                </li>
            )
        })
        return (
          <div className="App">
              <h1>我的待办</h1>
              <div className="inputWrapper">
                  {/*<input type="text" value={this.state.newTodo}/>*/}
                  <TodoInput content={this.state.newTodo}/>
              </div>
              <ol>
                  {todos}
              </ol>
          </div>
        );
    }
}

export default App;
