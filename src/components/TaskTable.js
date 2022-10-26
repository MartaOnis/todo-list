import '../styles/TaskTable.scss';
import TaskItem from './TaskItem';
const TaskTable = ({
  tasks,
  toggleTask,
  showCompleted = false,
  title,
  removeTask,
}) => {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskItem
          key={task.name}
          task={task}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      ));
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table__title">{title}</th>
        </tr>
      </thead>
      <tbody className="table__item">{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};

export default TaskTable;
