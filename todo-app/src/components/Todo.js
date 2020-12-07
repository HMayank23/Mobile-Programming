import React , {useState} from 'react';
import TodoItem from "./TodoItem";
import Container from '@material-ui/core/Container';
import AddTodo from "./AddTodo";

function Todo() {

    const [todoList , setTodoList] = useState([
        {name: 'Meeting at 11'},
        {name: 'Complete task today'},
        {name: 'Sprint release at 7pm'}
    ]);

    const addNewTodohandler = (val) => {
        let obj= Object.create(null);
        obj['name'] = val;
        setTodoList([...todoList, obj])
    }

    return(
        <div>
            <h1>Todo App</h1>
            <Container maxWidth="sm">
                {/* Child component adding a new Todo Item */}
                <AddTodo newTodo={addNewTodohandler}/>
                <div className="container">
                    {/* Todo Items */}
                    <TodoItem items ={todoList}/>
                </div>
            </Container>
        </div>
    )
}

export default Todo;