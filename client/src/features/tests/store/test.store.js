import { useState } from 'react';
import { FEATURED_TEST_SERIES } from '../../../data/tests';

export function useTestStore() {
  const [tests, setTests] = useState(FEATURED_TEST_SERIES);
  const [selectedTest, setSelectedTest] = useState(null);

  return { tests, selectedTest, setSelectedTest };
}

export default useTestStore;
