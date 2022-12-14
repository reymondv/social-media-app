import { useState } from 'react';

const InputBox = ({ onCreate }) => {
  const [content, setContent] = useState('');

  const onAdd = (e) => {
    e.preventDefault();
    if (!content) {
      alert('Post should not be empty');
      return;
    }
    onCreate({ content });
    setContent('');
  };
  return (
    <>
      <form className='input-post' onSubmit={onAdd}>
        <textarea
          type='textarea'
          name='write_post'
          placeholder='Write your post here'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input type='submit' value='Create post' className='btn-post' />
      </form>
    </>
  );
};

export default InputBox;
