import Rows from './rows';
export default function Table({ users, headings, onClickEdit }) {
  // props
  return (
    <table id="users">
      <tbody>
        <tr>{headings}</tr>
        <Rows users={users} onClickEdit={onClickEdit} />
      </tbody>
    </table>
  );
}
