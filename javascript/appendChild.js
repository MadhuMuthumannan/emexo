const users = ['Madhu', 'Ramesh', 'Suresh'];
const rootElement = document.getElementById('listItems');
document.createElement('ol').id = 'list';
const listContainer = document.getElementById('list');
users.forEach((user) => {
  // Create an "li" node:
  const node = document.createElement('li');

  // Create a text node:
  const textnode = document.createTextNode(user);

  // Append the text node to the "li" node:
  node.appendChild(textnode);

  // Append the "li" node to the list:
  document.getElementById('myList').appendChild(node);
});
