import React from 'react';
import './TodoItem.css'

class TodoInput extends React.Component{
    render(){
        return <input type="text" className="TodoInput" value={this.props.content} onChange={this.changeTitle.bind(this)} onKeyPress={this.submit.bind(this)}/>
    }
    submit(e){
        if(e.key === 'Enter'){
            console.log(this)
            // this.props.onSubmit.call()
            this.props.onSubmit(e)
        }
    }
    changeTitle(e){
        this.props.onChange(e)
    }
}
export default TodoInput