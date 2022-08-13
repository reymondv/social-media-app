import { useState } from 'react';
import InputBox from '../InputBox/index.js';
import Posts from '../Posts/index.js';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const Home = ({ user }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: 'Juan Dela Cruz',
      content: 'TGIF!',
      timestamp: '8/13/2022, 8:21:12 PM',
    },
    {
      id: 1,
      name: 'Reymond Villanueva',
      content: 'Happy Weekend Everyone!',
      timestamp: '8/13/2022, 8:30:12 PM',
    },
    {
      id: 1,
      name: 'Micheal Angelo',
      content: 'Just Got Home!',
      timestamp: '8/13/2022, 9:20:12 PM',
    },
  ]);

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
        ? (a, b) => (Date.parse(a.timestamp) < Date.parse(b.timestamp) ? 1 : -1)
        : (a, b) => (Date.parse(a.timestamp) > Date.parse(b.timestamp) ? 1 : -1)
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
      <InputBox onCreate={createPost} />
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
