import '../styles/TaskTable.scss';
import TaskItem from './TaskItem';
const TaskTable = ({ tasks, toggleTask, showCompleted = false, title }) => {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskItem key={task.name} task={task} toggleTask={toggleTask} />
      ));
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table__title">{title}</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};

export default TaskTable;