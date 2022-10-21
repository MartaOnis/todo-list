import '../styles/TaskItem.scss';
const TaskItem = ({ task, toggleTask }) => {
  const changeClass = (value) => {
    if (value === true) {
      return 'clicked';
    } else {
      return '';
    }
  };
  return (
    <tr>
      <td className={`taskItem ${changeClass(task.done)}`}>
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
