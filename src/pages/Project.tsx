import { useParams } from 'react-router-dom';

import Tasks from '../components/Tasks';

const Project = () => {
  const { projectId } = useParams();

  return (
    <div>
      <h1>{projectId}</h1>
      <Tasks projectId={projectId} />
    </div>
  );
};

export default Project;
