import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Axios() {
  const [id, setId] = useState();
  let tempId;
  const onIdChange = (val) => {
    tempId = val;
  };
  const baseURL = 'https://jsonplaceholder.typicode.com/posts/';

  const onSetId = () => {
    setId(tempId);
  };

  const getAllPosts = () => {
    axios.get(`${baseURL}`).then((response) => {
      console.log(response.data);
    });
  };

  useEffect(() => {
    if (id) {
      axios.get(`${baseURL}${id}`).then((response) => {
        console.log(response.data);
      });
    }
  }, [id]);

  return (
    <div>
      <label>Enter id:</label>
      <input type="text" onChange={(e) => onIdChange(e.target.value)} />
      <button onClick={() => onSetId()}>Get By ID</button>

      <button onClick={() => getAllPosts()}>Get All posts</button>
    </div>
  );
}
