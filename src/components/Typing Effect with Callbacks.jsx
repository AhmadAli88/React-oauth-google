import {ReactTyped} from 'react-typed';

const TypingEffectWithCallbacks = () => {
  const onStart = () => console.log('Typing Started');
  const onComplete = () => console.log('Typing Completed');

  return (
    <div>
      <ReactTyped
        strings={['Watch the console for events!']}
        typeSpeed={50}
        backSpeed={30}
        loop={false}
        onStart={onStart}
        onComplete={onComplete}
      />
    </div>
  );
};

export default TypingEffectWithCallbacks;
