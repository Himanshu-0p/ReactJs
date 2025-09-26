import React from 'react'

const Header = () => {
  const username = useContext(DataContext)
  return (
    <div>Header {username.age}</div>
  )
}

export default Header