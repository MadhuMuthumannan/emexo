function UserDetail({ user, updateUser }) {
  return (
    <div className="userDetailContainer">
      <h3>User Detail Component</h3>
      {user.name} is of age {user.age}
      <button onClick={() => updateUser(user)}>Update User</button>
    </div>
  );
}

export default UserDetail;
