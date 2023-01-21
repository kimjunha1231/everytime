import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.title}</b> <span>{user.content}</span>
     

    </div>
  );
}

function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id}>

        </User>
      ))}
    </div>
  );
}

export default UserList;