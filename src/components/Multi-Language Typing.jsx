import { useState } from 'react';
import {ReactTyped} from 'react-typed';

const MultiLanguageTyping = () => {
  const [language, setLanguage] = useState('en');

  const phrases = {
    en: ['Hello, World!', 'Welcome to React-Typed!'],
    es: ['Hola, Mundo!', '¡Bienvenido a React-Typed!'],
    fr: ['Bonjour, Monde!', 'Bienvenue à React-Typed!'],
  };

  return (
    <div>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>

      <ReactTyped
        strings={phrases[language]}
        typeSpeed={50}
        backSpeed={30}
        loop
      />
    </div>
  );
};

export default MultiLanguageTyping;
