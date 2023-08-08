import { collection, limit, orderBy, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

import { db } from '../firebase';

const projectsRef = collection(db, 'projects');
const projectsQuery = query(projectsRef, orderBy('name'), limit(3));

const useProjects = () => {
  const [value, loading, error] = useCollection(projectsQuery, {
    snapshotListenOptions: { includeMetadataChanges: true }
  });

  return { data: value?.docs, isLoading: loading, error };
};

export default useProjects;
