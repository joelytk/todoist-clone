import { NavLink } from 'react-router-dom';

import { useProjects } from '../hooks';

const Projects = () => {
  const { projects, isProjectsLoading, projectsError } = useProjects();

  return (
    <div>
      {projectsError && <strong>Error: {JSON.stringify(projectsError)}</strong>}
      <h2 className='projects__title'>Projects</h2>
      {isProjectsLoading ? (
        <span>Loading...</span>
      ) : (
        <nav className='projects'>
          {projects?.map(project => (
            <NavLink
              key={project.id}
              to={`/project/${project.id}`}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {project.name}
            </NavLink>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Projects;
