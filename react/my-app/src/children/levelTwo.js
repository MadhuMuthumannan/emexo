import { useContext } from 'react';
import { ThemeContext } from './themeContext';
import './levelTwo.css';

export default function LevelTwo() {
  const { toggle, toggleFunction } = useContext(ThemeContext);
  const className = `box theme-${toggle}`;
  return (
    <div>

      <div className={className}>

      </div>
      <button onClick={toggleFunction}>Toggle Theme</button>
      <span>works</span>
    </div>
  );
}
