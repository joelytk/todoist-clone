import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import useProjects from './hooks/useProjects';

const App = () => {
  // const {
  //   data: tasks,
  //   isLoading: isTasksLoading,
  //   error: tasksError
  // } = useTasks();
  const {
    data: projects,
    isLoading: isProjectsLoading,
    error: projectsError
  } = useProjects();

  return (
    <>
      <Header />
      <main>
        <Sidebar />
        {/* <div>
          <p>
            {tasksError && <strong>Error: {JSON.stringify(error)}</strong>}
            {isTasksLoading && <span>Tasks: Loading...</span>}
            {tasks && (
              <span>
                Tasks:{' '}
                {tasks?.map(task => (
                  <Fragment key={task.id}>
                    {JSON.stringify(task.data())},{' '}
                  </Fragment>
                ))}
              </span>
            )}
          </p>
        </div> */}
        <div>
          <p>
            {projectsError && <strong>Error: {JSON.stringify(error)}</strong>}
            {isProjectsLoading && <span>Projects: Loading...</span>}
            Projects:
            <ul>
              {projects?.map(project => (
                <li key={project.id}>{project.data()?.name}</li>
              ))}
            </ul>
          </p>
        </div>
      </main>
    </>
  );
};

export default App;
