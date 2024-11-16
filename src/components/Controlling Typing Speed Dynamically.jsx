import { useState } from 'react';
import {ReactTyped} from 'react-typed';

const AdjustableSpeedTypingEffect = () => {
  const [speed, setSpeed] = useState(50);

  return (
    <div>
      <label>
        Typing Speed:
        <input
          type="number"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </label>
      <ReactTyped
        strings={['Adjust the typing speed in real time!']}
        typeSpeed={speed}
        backSpeed={speed / 2}
        loop
      />
    </div>
  );
};

export default AdjustableSpeedTypingEffect;
