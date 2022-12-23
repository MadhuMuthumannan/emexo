import { useContext } from 'react';
import { ThemeContext } from './themeContext';
import './levelTwo.css';

export default function LevelTwo() {
  const theme = useContext(ThemeContext);
  console.log(theme);
  const className = `box theme-${theme}`;
  return (
    <ThemeContext.Consumer>
      <div>
        <div className={className}></div>
        <span>works</span>
      </div>
    </ThemeContext.Consumer>
  );
}
