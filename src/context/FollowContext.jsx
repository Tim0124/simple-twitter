import { createContext, useState } from 'react';

export const GetRenderContext = createContext()
export const SetRenderContext = createContext()

export function GetFollowContextProvider({children}) {
  const [render, setRender] =useState('init')
  return(
    <SetRenderContext.Provider value={setRender}>
      <GetRenderContext.Provider value={render}>
        {children}
      </GetRenderContext.Provider>
    </SetRenderContext.Provider>
  )
}