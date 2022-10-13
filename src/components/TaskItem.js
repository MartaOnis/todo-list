import '../styles/TaskItem.scss';
const TaskItem = ({ task, toggleTask, handleClickState }) => {
  const changeClass = (value) => {
    if (value === true) {
      return 'clicked';
    } else {
      return '';
    }
  };
  return (
    <tr>
      <td className="taskItem" onClick={handleClickState}>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
        <p className={`taskItem__paragraph ${changeClass(task.done)}`}>
          {task.name}
        </p>
      </td>
    </tr>
  );
};
export default TaskItem;
