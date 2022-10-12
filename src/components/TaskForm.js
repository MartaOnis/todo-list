import '../styles/TaskForm.scss';
const TaskForm = (props) => {
  return (
    <form className="taskForm" onSubmit={props.handleSubmit}>
      {/* <label className="todoForm__label" htmlFor="task">
        New Task:
      </label> */}
      <input
        className="taskForm__input"
        type="text"
        name="task"
        id="task"
        value={props.input}
        onChange={props.handleInput}
        placeholder="Add a new task"
      ></input>
      <button className="taskForm__btn">Add</button>
    </form>
  );
};
export default TaskForm;
