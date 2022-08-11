import Button from '../Button/index.js';

const Home = () => {
  const test = () => {
    console.log('test');
  };
  return (
    <>
      <div className='container'>
        <Button buttonClicked={test} />
      </div>
    </>
  );
};

export default Home;
