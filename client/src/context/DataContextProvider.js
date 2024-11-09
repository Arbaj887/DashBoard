import React, { useState } from 'react'
import DataContext from './DataContext'

function DataContextProvider({children}) {

  const [backendData,setBackendData] = useState(undefined);

  return (
   <DataContext.Provider value={{backendData,setBackendData}}>
     {children}
     
   </DataContext.Provider>
  )
}

export default DataContextProvider