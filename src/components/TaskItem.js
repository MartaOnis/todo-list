import '../styles/TaskItem.scss';
import { RiCloseCircleLine } from 'react-icons/ri';
const TaskItem = ({ task, toggleTask, removeTask }) => {
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
        <p>
          <RiCloseCircleLine
            className="delete-icon"
            onClick={() => removeTask(task.id)}
            id={task.id}
          />
        </p>
      </td>
    </tr>
  );
};
export default TaskItem;
