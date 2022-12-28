import React, { useRef, useEffect } from 'react';

function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <div>
        Input Without focus: <input type="text" />
      </div>
      <div>
        Input with useRef Focus: <input ref={inputRef} type="text" />
      </div>
    </div>
  );
}

export default FocusInput;
