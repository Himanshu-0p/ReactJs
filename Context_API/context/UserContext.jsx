import React,{createContext} from 'react'

export const DataContext = createContext()

const UserContext = ({children}) => {
  const userData  = {
        username : "Himanshu Patil",
        age      : "22",
        city     : "Pune"
  }
  return (
      <div>
        <DataContext.Provider value={username}>
            {children}
        </DataContext.Provider>
      </div>
  )
}

export default UserContext