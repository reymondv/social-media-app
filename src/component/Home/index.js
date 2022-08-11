import { useState } from 'react';
import InputBox from '../InputBox/index.js';
import Posts from '../Posts/index.js';
import { Router } from 'react-router-dom';
const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: 'John Doe',
      content: 'test post 1',
      timestamp: '8/11/2022, 8:45:17 PM',
    },
  ]);
  const [user, setUser] = useState('John Doe');
  const date = new Date();
  const [sort, setSort] = useState(true);
  const [isEditable, setEdit] = useState(false);

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const updatePost = (id, content) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, content: content } : post
      )
    );
  };

  const createPost = (post) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newPost = {
      id,
      name: user,
      ...post,
      timestamp: date.toLocaleString(),
    };
    setPosts([...posts, newPost]);
  };

  const toggleEdit = () => {
    setEdit(!isEditable);
    console.log(isEditable);
  };

  return (
    <>
      {/* <button onClick={() => setSort(!sort)}>Hello</button> */}
      <InputBox onCreate={createPost} />
      {posts.length > 0 ? (
        <Posts
          post={posts}
          user={user}
          onDelete={deletePost}
          sort={sort}
          onEdit={toggleEdit}
          onSave={updatePost}
        />
      ) : (
        <div className='card-bg'>
          <p>No post available.</p>
        </div>
      )}
    </>
  );
};

export default Home;
