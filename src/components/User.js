import React from 'react'

const User = ({ user }) => {
  console.log(user)
  console.log('User')
  return (
    <div>
      <hr />
      <p>{`Full Name: ${user.name.first} ${user.name.last}`}</p>
      <p>{`Phone: ${user.phone}`}</p>
    </div>
  )
}

export default User
