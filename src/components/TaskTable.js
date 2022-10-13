import '../styles/TaskTable.scss';
import TaskItem from './TaskItem';
const TaskTable = ({
  tasks,
  toggleTask,
  showCompleted,
  title,
  handleClickState,
}) => {
  const taskTableRows = (state) => {
    console.log(state);
    return tasks
      .filter((task) => task.state === state)
      .map((task) => (
        <TaskItem
          key={task.name}
          task={task}
          toggleTask={toggleTask}
          handleClickState={handleClickState}
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
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};

export default TaskTable;
