import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

const View = () => {
  let { id } = useParams();
  const location = useLocation();
  const { post } = location.state;
  return (
    <>
      <div>
        <Link to='/'>Back</Link>
      </div>
      <div>
        <h3>{post.name}</h3>
        <p>{post.content}</p>
      </div>
    </>
  );
};

export default View;
