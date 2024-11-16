import  { useEffect, useState } from 'react';
import {ReactTyped} from 'react-typed';

const DynamicTypedEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setData(['Dynamic Text 1', 'Dynamic Text 2', 'Dynamic Text 3']);
    }, 1000);
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <ReactTyped strings={data} typeSpeed={40} backSpeed={50} loop />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DynamicTypedEffect;
