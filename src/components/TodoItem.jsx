import "../css/todoItem.css";

function TodoItem({ item, todos, setTodos }) {
  // Function to handle deleting an item
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  // Function to handle toggling the done status of an item
  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }

  return (
    <div className="item">
      <div className="itemName">
        <span
          className={item.done ? "taskCompleted" : ""}
          onClick={() => handleClick(item.name)}
        >
          {item.name}
        </span>
        <span>
          <button onClick={() => handleDelete(item)} className="dltBtn">
            x
          </button>
        </span>
      </div>
      <hr className="line" />
    </div>
  );
}

export default TodoItem;
