import {ReactTyped} from 'react-typed';

const StyledTypingEffect = () => {
  return (
    <div>
      <h1>
        <ReactTyped
          strings={['Frontend Developer', 'Backend Developer', 'Full Stack Developer']}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </h1>
      <style>{`
        h1 {
          color: #4caf50;
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default StyledTypingEffect;
