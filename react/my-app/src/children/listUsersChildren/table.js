import Rows from "./rows";
export default function Table({ users, headings }) {
    return (
        <table id="users">
        <tbody>
          <tr>{headings}</tr>
          <Rows users={users} />
        </tbody>
      </table>
    );
  }
  