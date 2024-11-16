import {ReactTyped} from 'react-typed';

const BasicTypingEffect = () => {
  return (
    <div>
      <ReactTyped
        strings={['Hello, World!', 'Welcome to React-Typed']}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
  );
};

export default BasicTypingEffect;
