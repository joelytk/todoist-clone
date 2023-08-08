import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

import { db } from '../firebase';

const useTasks = () => {
  const [value, loading, error] = useCollection(collection(db, 'tasks'), {
    snapshotListenOptions: { includeMetadataChanges: true }
  });

  return { tasks: value?.docs, isLoading: loading, error };
};

export default useTasks;
