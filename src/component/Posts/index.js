import Card from '../Card/index.js';

const Posts = ({ post, onDelete, user, sort, onSave }) => {
  return (
    <>
      <div className='card-bg'>
        {sort
          ? post
              .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))
              .map((data, idx) => (
                <Card
                  key={idx}
                  user={user}
                  posts={data}
                  onDelete={onDelete}
                  onSave={onSave}
                />
              ))
          : post
              .sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1))
              .map((data, idx) => (
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
