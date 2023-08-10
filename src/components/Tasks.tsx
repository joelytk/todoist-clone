import { useTasks } from '../hooks';

const Tasks = () => {
  const { tasks, isTasksLoading, tasksError } = useTasks();

  return (
    <div>
      {tasksError && <strong>Error: {JSON.stringify(tasksError)}</strong>}
      Tasks:
      {isTasksLoading ? (
        <span>Loading...</span>
      ) : (
        <ul>
          {tasks?.map(task => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;
