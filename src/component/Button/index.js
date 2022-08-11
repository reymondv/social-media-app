import React from 'react';

const Button = (props) => {
  return (
    <>
      <button onClick={props.buttonClicked}>Create post</button>
    </>
  );
};

export default Button;
