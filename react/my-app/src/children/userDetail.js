function UserDetail(props) {
  return (
    <div className="userDetailContainer">
      <h3>User Detail Component:</h3>
      {props.user.name} is of age {props.user.age}
      <button onClick={() => props.updateUser(props.user)}>Update User</button>
    </div>
  );
}

export default UserDetail;
