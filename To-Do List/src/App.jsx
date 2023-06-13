import React from 'react'
import CreateTodo from './Component/CreateToDo'
import TodoList from './Component/TodoList'
import { Container } from '@mui/material'
import './App.css'

function App() {
  return (
    <Container maxWidth ="sm">
      App Container
      <CreateTodo/>
      <TodoList/>
    </Container>
  
  )
}

export default App