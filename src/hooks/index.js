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
          ...project.data(),
          id: project.id
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
const tasksQuery = projectId =>
  query(
    tasksRef,
    where('userId', '==', '1JbLNUB9BUKyJ52PkDNf'),
    where('projectId', '==', projectId)
    // orderBy('createdAt')
  );

export const useTasks = projectId => {
  const [value, loading, error] = useCollection(tasksQuery(projectId), {
    snapshotListenOptions: { includeMetadataChanges: true }
  });
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (value?.docs) {
      setTasks(
        value.docs?.map(task => ({
          ...task.data(),
          id: task.id,
          createdAt: new Date(task.data()?.createdAt?.seconds * 1000)
        }))
      );
    }
  }, [value]);

  return { tasks, isTasksLoading: loading, tasksError: error };
};
