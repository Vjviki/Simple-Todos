import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'
import './index.css'

class SimpleTodos extends Component {
  state = {
    todoList: [
      {id: 1, title: 'Book the ticket for today evening', isCompleted: false},
      {
        id: 2,
        title: 'Rent the movie for tomorrow movie night',
        isCompleted: false,
      },
      {
        id: 3,
        title: 'Confirm the slot for the yoga session tomorrow morning',
        isCompleted: false,
      },
      {id: 4, title: 'Drop the parcel at Bloomingdale', isCompleted: false},
      {id: 5, title: 'Order fruits on Big Basket', isCompleted: false},
      {id: 6, title: 'Fix the production issue', isCompleted: false},
      {id: 7, title: 'Confirm my slot for Saturday Night', isCompleted: false},
      {id: 8, title: 'Get essentials for Sunday car wash', isCompleted: false},
    ],
    inputValue: '',
  }

  handleInputChange = event => {
    this.setState({inputValue: event.target.value})
  }

  addTodo = () => {
    const {inputValue, todoList} = this.state
    if (inputValue.trim() === '') return

    const newTodos = [
      {
        id: uuidv4(),
        title: inputValue,
        isCompleted: false,
      },
    ]

    this.setState({
      todoList: [...todoList, ...newTodos],
      inputValue: '',
    })
  }

  deleteUser = id => {
    this.setState(prev => ({
      todoList: prev.todoList.filter(todo => todo.id !== id),
    }))
  }

  toggleCompleted = id => {
    this.setState(prev => ({
      todoList: prev.todoList.map(todo =>
        todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo,
      ),
    }))
  }

  updateTitle = (id, newTitle) => {
    this.setState(prev => ({
      todoList: prev.todoList.map(todo =>
        todo.id === id ? {...todo, title: newTitle} : todo,
      ),
    }))
  }

  render() {
    const {todoList, inputValue} = this.state
    return (
      <div className="bg-container">
        <div className="bg-secondary-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="input-container">
            <input
              value={inputValue}
              onChange={this.handleInputChange}
              placeholder="Enter todo or 'BuyMilk 3'"
              className="todo-input"
            />
            <button className="add-btn" onClick={this.addTodo} type="button">
              Add
            </button>
          </div>
          <ul className="todo-list">
            {todoList.map(todo => (
              <TodoItem
                key={todo.id}
                todoDetails={todo}
                deleteUser={this.deleteUser}
                toggleCompleted={this.toggleCompleted}
                updateTitle={this.updateTitle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
