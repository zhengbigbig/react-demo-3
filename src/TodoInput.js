import React from 'react';
import './TodoItem.css'

/*
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
export default TodoInput*/
function submit (props, e) {
    if (e.key === 'Enter') {
        if (e.target.value.trim() !== '') {
            props.onSubmit(e)
        }
    }
}
function changeTitle (props, e) {
    props.onxChange(e)
}

export default function (props) {
    return <input type="text" value={props.content}
                  className="TodoInput"
                  onChange={changeTitle.bind(null, props)}
                  onKeyPress={submit.bind(null, props)}/>
}
/*
上面的代码相当于
let temp = function(e){
    changeTitle.call(null, props, e)
}

onChange={temp}*/
//相当于与onchange的事件参数传给changeTitle
