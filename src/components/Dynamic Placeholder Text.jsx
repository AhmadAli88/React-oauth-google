import {ReactTyped} from 'react-typed';

const PlaceholderEffect = () => {
  return (
    <div style={{ width: '100%' }}>
      <ReactTyped
        strings={['Search for products...', 'Search for services...', 'Search for anything!']}
        typeSpeed={50}
        backSpeed={30}
        loop
        attr="placeholder" // Dynamically updates the `placeholder`
      >
        <input
          type="text"
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        />
      </ReactTyped>
    </div>
  );
};

export default PlaceholderEffect;
