import {ReactTyped} from 'react-typed';

const HeroSection = () => {
  return (
    <div style={{ textAlign: 'center', margin: '100px 0' }}>
      <h1>Welcome to Our Platform</h1>
      <ReactTyped
        strings={['Build Faster', 'Deploy Smarter', 'Scale Better']}
        typeSpeed={60}
        backSpeed={40}
        loop
      />
    </div>
  );
};

export default HeroSection;
