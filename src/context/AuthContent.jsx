import { createContext, useState } from 'react';

const defaultAuthContent = {
  isAuthenticated:false,
}

 export const AuthContext = createContext(defaultAuthContent)

export const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <>
      <AuthContext.Provider 
        value={{
          isAuthenticated
        }}>
        {children}
       </AuthContext.Provider>
    </>
  )
}