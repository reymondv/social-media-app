import { CgProfile } from 'react-icons/cg';

const Header = ({ user }) => {
  return (
    <>
      <header>
        <div className='logo-container'>
          <h1>Social Media App</h1>
        </div>

        <div className='user-container'>
          <CgProfile id='user-picture' />
          <h4>{user}</h4>
        </div>
      </header>
    </>
  );
};

export default Header;
