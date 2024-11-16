import {ReactTyped} from 'react-typed';

const MixedContentEffect = () => {
  return (
    <div>
      <h2>
        Welcome to{' '}
        <ReactTyped
          strings={['React-Typed!', 'Your Project!', 'Our Community!']}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </h2>
    </div>
  );
};

export default MixedContentEffect;
