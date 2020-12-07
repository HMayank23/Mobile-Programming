import React , {useState}  from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function AddTodo({newTodo}) {
    const[todoInput , setTodoInput] = useState("");
    const addTodoHandler = () => {
        var todoItem = todoInput;
        if(todoItem){
            setTodoInput("");
            newTodo(todoItem);
        }
    }
    return(
        <div style={{marginBottom : '20px' , display:'flex', justifyContent:'space-between'}}>
            <TextField id="standard-basic" label="New Todo" type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)}/>

            <Button size="small" variant="contained" color="primary" onClick={addTodoHandler}>Add</Button>
        </div>
    )
}

export default AddTodo;