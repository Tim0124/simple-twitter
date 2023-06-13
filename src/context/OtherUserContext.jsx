import otherUserAPI from 'api/otherUserAPI';
import { useNavigate } from 'react-router-dom';

const { createContext, useState } = require('react');

export const OtherUserContext = createContext()
export const GetOtherUserIdContext = createContext()

export function OtherUserContextProvider ({children}) {
  const [isOtherUserData, setIsOtherUserData] = useState('')

  const handleOtherUserId = (userId) => {
    setIsOtherUserData(userId)
  }

  return (
    <OtherUserContext.Provider value={isOtherUserData}>
      <GetOtherUserIdContext.Provider value={handleOtherUserId}>
        {children}
      </GetOtherUserIdContext.Provider>
    </OtherUserContext.Provider>
  )
}