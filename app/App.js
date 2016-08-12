import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Heading from './Heading'
import Input from './Input'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
  }

  _inputChange(inputValue) {
    console.log('Input Value: ', inputValue)
    this.setState({ inputValue })
  }

  _submitTodo () {
    if (this.state.inputValue === '') return
    let todo = {
      title: this.state.inputValue,
      todoIndex: todoIndex,
      complete: false
    }
    todoIndex++
    this.state.todos.push(todo)
    this.setState({ todos: this.state.todos, inputValue: '' })
    console.log('State: ', this.state)
  }

  render() {
    const { inputValue } = this.state
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            _inputChange={ (text) => this._inputChange(text) } />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})

export default App
