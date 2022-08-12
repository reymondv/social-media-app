import { useState } from 'react';
import InputBox from '../InputBox/index.js';
import Posts from '../Posts/index.js';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
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
  const [search, setSearch] = useState('');

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

  const processedData = posts
    .sort(
      sort
        ? (a, b) => (a.timestamp < b.timestamp ? 1 : -1)
        : (a, b) => (a.timestamp > b.timestamp ? 1 : -1)
    )
    .filter((data) => {
      if (search === '') {
        return data;
      } else {
        return data.content.toLowerCase().includes(search);
      }
    });

  const toggleEdit = () => {
    setEdit(!isEditable);
  };
  return (
    <>
      <InputBox onCreate={createPost} />
      <div className='filter-bar'>
        <button onClick={() => setSort(!sort)}>
          Sort by date {sort ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
        </button>

        <input
          name='search'
          placeholder='Search post'
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {posts.length > 0 && processedData.length > 0 ? (
        <Posts
          post={processedData}
          user={user}
          onDelete={deletePost}
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
