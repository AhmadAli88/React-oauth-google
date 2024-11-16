import BasicTypingEffect from './components/Basic Typing Effect';
import AdjustableSpeedTypingEffect from './components/Controlling Typing Speed Dynamically';
import StyledTypingEffect from './components/Custom Typed Text Styling';
import PlaceholderEffect from './components/Dynamic Placeholder Text';
import DynamicTypedEffect from './components/Dynamic Strings from an API';
import HeroSection from './components/Integrating with Hero Sections';
import SingleCycleTypingEffect from './components/Single Cycle Typing';
import TypingEffectWithCallbacks from './components/Typing Effect with Callbacks';
import MixedContentEffect from './components/Typing Effects with Static and Dynamic Content';
import MultiLanguageTyping from './components/Multi-Language Typing';
import './App.css';

function App() {
  return (
    <div>
      <BasicTypingEffect />
      <StyledTypingEffect />
      <PlaceholderEffect />
      <DynamicTypedEffect />
      <TypingEffectWithCallbacks />
      <HeroSection />
      <AdjustableSpeedTypingEffect />
      <MixedContentEffect />
      <SingleCycleTypingEffect />
      <MultiLanguageTyping />
    </div>
  );
}

export default App;
