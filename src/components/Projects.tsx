import { useProjects } from '../hooks';

const Projects = () => {
  const { projects, isProjectsLoading, projectsError } = useProjects();

  return (
    <div>
      {projectsError && <strong>Error: {JSON.stringify(projectsError)}</strong>}
      Projects:
      {isProjectsLoading ? (
        <span>Loading...</span>
      ) : (
        <ul className='projects'>
          {projects?.map(project => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Projects;
