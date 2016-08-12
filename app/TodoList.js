import React from 'react'
import { View } from 'react-native'
import Todo from './Todo'

const TodoList = ({ todos }) => {
  todos = todos.map((todo, i) => {
    return (
      <Todo
        key={i}
        todo={todo} />
    )
  })
  return (
    <View>
      {todos}
    </View>
  )
}

export default TodoList
