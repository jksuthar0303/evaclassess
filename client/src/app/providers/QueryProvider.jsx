import React, { createContext, useContext } from 'react';
import { queryClient } from '../../lib/queryClient';

const QueryContext = createContext(queryClient);

export function QueryProvider({ children }) {
  return (
    <QueryContext.Provider value={queryClient}>
      {children}
    </QueryContext.Provider>
  );
}

export const useQueryClient = () => useContext(QueryContext);
export default QueryProvider;
