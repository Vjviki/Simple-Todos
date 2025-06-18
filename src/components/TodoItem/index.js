import {useState} from 'react'
import './index.css'

const TodoItem = ({todoDetails, deleteUser, toggleCompleted, updateTitle}) => {
  const {id, title, isCompleted} = todoDetails
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(title)

  const onDelete = () => deleteUser(id)
  const onToggleCompleted = () => toggleCompleted(id)
  const onEditClick = () => setIsEditing(true)
  const onSaveClick = () => {
    updateTitle(id, editText)
    setIsEditing(false)
  }

  return (
    <li className="simple-list">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onToggleCompleted}
      />
      {isEditing ? (
        <input
          className="edit-input"
          value={editText}
          onChange={e => setEditText(e.target.value)}
        />
      ) : (
        <p className={`list ${isCompleted ? 'completed' : ''}`}>{title}</p>
      )}
      {isEditing ? (
        <button className="save-btn" onClick={onSaveClick} type="button">
          Save
        </button>
      ) : (
        <button className="edit-btn" onClick={onEditClick} type="button">
          Edit
        </button>
      )}
      <button className="delete-btn" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
