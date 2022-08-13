import Card from '../Card/index.js';

const Posts = ({ post, onDelete, user, onSave }) => {
  return (
    <>
      <div className='card-bg'>
        {post.map((data, idx) => (
          <Card
            key={idx}
            user={user}
            posts={data}
            onDelete={onDelete}
            onSave={onSave}
          />
        ))}
      </div>
    </>
  );
};

export default Posts;
