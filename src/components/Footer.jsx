import "../css/footer.css";
export default function Footer({ completedTodos, totalTodos }) {
  console.log(totalTodos);
  return (
    <div className="footer">
      <span className="compTodo">Completed Todos: {completedTodos}</span>
      <span className="compTodo">Total Todos: {totalTodos} </span>
    </div>
  );
}
