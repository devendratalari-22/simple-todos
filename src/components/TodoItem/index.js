// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-items">
      <p>{title}</p>
      <button className="button-style" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
