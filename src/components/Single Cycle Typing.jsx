import {ReactTyped} from 'react-typed';

const SingleCycleTypingEffect = () => {
  return (
    <div>
      <ReactTyped
        strings={['This will type out once and stop.']}
        typeSpeed={50}
        backSpeed={30}
        loop={false}
      />
    </div>
  );
};

export default SingleCycleTypingEffect;
