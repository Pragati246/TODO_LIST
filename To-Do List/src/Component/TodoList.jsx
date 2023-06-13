import React, { useEffect } from 'react'
import {Checkbox, Typography , Button } from '@mui/material'

function TodoList() {
  const [todos, setTodos] = React.useState([])

  // Fetch data from API
  useEffect(() => {
    fetch('https://todo-4c812-default-rtdb.asia-southeast1.firebasedatabase.app/todo.json')
    .then(response => response.json())
    .then(data => {
        let todosBuilder = [];
        for (const key in data) {
            todosBuilder.push({
                id: key,
                ...data[key]
            })
        }
        console.log(todosBuilder)
        setTodos(todosBuilder)
    })
  }, [])

  return (
    <div className='todos'>
        {   
            todos.length > 0
            ? (
                <div className='container'>
                    {   
                        todos.map((todo) => {
                            return (
                                <div key={todo.id} className='todo'>
                                    <div className="todo-left">
                                        <div className="todo-done">
                                            <Checkbox
                                            checked={todo.idCompleted}
                                            color="primary"
                                            inputProps={{'arial-label': 'secondary checkbox'}}
                                            />
                                        </div>
                                        <div className="todo-details">
                                            <Typography variant="h6" component="div">{todo.title}</Typography>
                                            <Typography variant="body2" component="div">{todo.description}</Typography>
                                        </div>
                                    </div>
                                    <div className="todo-right">
                                        <div className="todo-delete">
                                            <Button variant="contained" color="error" size='small'>Delete</Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })   
                    }
                </div>
            )
            : <div>No todos</div>
        }
    </div>
  )
}

export default TodoList