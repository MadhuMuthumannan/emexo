function UserDetail(props) {
  return (
    <div className="userDetailContainer">
      <h3>User Detail Component:</h3>
      {props.user.name} is of age {props.user.age}
    </div>
  );
}

export default UserDetail;
