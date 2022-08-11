import React from 'react';

const Button = ({ buttonClicked }) => {
  return (
    <>
      <button className='btn-post' onClick={buttonClicked}>
        Create post
      </button>
    </>
  );
};

export default Button;
