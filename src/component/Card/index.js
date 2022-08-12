import React from 'react';
import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Card = ({ posts, onDelete, user, onSave }) => {
  const [text, setText] = useState();
  const [isEditable, setEditable] = useState(false);

  const toggleEdit = () => {
    setEditable(!isEditable);
  };
  return (
    <>
      <div className='card'>
        <div className='card-header container'>
          <CgProfile className='profile' />
          {user === posts.name ? (
            <div className='profile-name'>
              <h3>{posts.name + ' (You)'}</h3>
              <p>{posts.timestamp}</p>
            </div>
          ) : (
            <h3>{posts.name}</h3>
          )}
          <AiFillDelete
            onClick={() => onDelete(posts.id)}
            style={{
              color: 'red',
              cursor: 'pointer',
              float: 'right',
              position: 'absolute',
              top: '5px',
              right: '5px',
              fontSize: '1.5rem',
            }}
          />
        </div>
        <div className='card-description'>
          {isEditable ? (
            <textarea
              type='text'
              name='edit_post'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          ) : (
            <h4>{posts.content}</h4>
          )}
        </div>

        {isEditable ? (
          <button className='btn-close' onClick={toggleEdit}>
            Exit
          </button>
        ) : (
          <button
            className='btn-primary'
            onClick={() => {
              setEditable(!isEditable);
              setText(posts.content);
            }}>
            Edit
          </button>
        )}

        {isEditable && (
          <button
            className='btn-primary'
            onClick={() => {
              onSave(posts.id, text);
              setEditable(!isEditable);
            }}>
            Save
          </button>
        )}
      </div>
    </>
  );
};

export default Card;
