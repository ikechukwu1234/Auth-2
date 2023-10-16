import React, { createContext, useEffect, useState } from 'react'

type IData = {
    isAuthenticated: boolean,
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean | "loading">>
};



export const GlobalContext = createContext <IData> ({
    isAuthenticated:false,
    setIsAuthenticated: () => {}
});

export const GlobalProvider = ({children}: React.PropsWithChildren) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | "loading">("loading");

  useEffect (() =>{
    const RetrieveData = localStorage.getItem("k10xAuth");

    if(RetrieveData) {
        setIsAuthenticated(JSON.parse(RetrieveData));
    }else
    {
        setIsAuthenticated(false)
    }
  }, [])  
  if (isAuthenticated === "loading"){
  return <div>loading...</div>
}
    
  return (
    <GlobalContext.Provider
    value={{
        isAuthenticated,
        setIsAuthenticated
    }}
    >
        {children}
      
    </GlobalContext.Provider>
  )
}

export default GlobalContext
