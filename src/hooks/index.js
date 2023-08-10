import { collection, limit, orderBy, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';

import { db } from '../firebase';

const projectsRef = collection(db, 'projects');
const projectsQuery = query(
  projectsRef,
  where('userId', '==', '1JbLNUB9BUKyJ52PkDNf')
);

export const useProjects = () => {
  const [value, loading, error] = useCollection(projectsQuery, {
    snapshotListenOptions: { includeMetadataChanges: true }
  });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (value?.docs) {
      setProjects(
        value.docs?.map(project => ({
          id: project.id,
          ...project.data()
        }))
      );
    }
  }, [value]);

  return {
    projects,
    isProjectsLoading: loading,
    projectsError: error
  };
};

const tasksRef = collection(db, 'tasks');
const tasksQuery = query(
  tasksRef,
  where('userId', '==', '1JbLNUB9BUKyJ52PkDNf')
  // orderBy('name'),
  // limit(3)
);

export const useTasks = selectedProject => {
  const [value, loading, error] = useCollection(tasksQuery, {
    snapshotListenOptions: { includeMetadataChanges: true }
  });
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (value?.docs) {
      setTasks(
        value.docs?.map(task => ({
          id: task.id,
          ...task.data()
        }))
      );
    }
  }, [value]);

  return { tasks, isTasksLoading: loading, tasksError: error };
};
