import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteUser} = props
  const {id, title} = todoDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="simple-list">
      <p className="list">{title}</p>
      <button type="button" className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
