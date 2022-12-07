import Checkbox from './listUsersChildren/checkBox';
import TextBox from './listUsersChildren/textBox';
import Button from './listUsersChildren/button';
import Rows from './listUsersChildren/rows';

export default function ListUsers({
  users,
  onFilterChange,
  filterByAge,
  onClickFilterButton,
}) {
  const headings = ['Name', 'Age', 'Gender', 'Rank'].map((heading, index) => (
    <th key={index}>{heading}</th>
  ));
  return (
    <div className="userContainer">
      Filter text input:
      <TextBox onFilterChange={onFilterChange} />
      <Checkbox filterByAge={filterByAge} />
      <Button onClickFilterButton={onClickFilterButton} />
      <table id="users">
        <tbody>
          <tr>{headings}</tr>
          <Rows users={users} />
        </tbody>
      </table>
      {/* <Table users={users} headings={headings} /> */}
    </div>
  );
}
