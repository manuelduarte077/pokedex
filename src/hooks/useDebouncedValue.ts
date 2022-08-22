import { useState, useEffect } from 'react';

export function useDebouncedValue(input: string = '', time: number = 500) {
  const [debouncedValue, setDebouncedValue] = useState(input);

  // Este se dispara cada que el input cambie
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(input)
    }, time)

    return () => {
      clearTimeout(timeoutId);
    };
  }, [input]);

  return debouncedValue;
}


export default useDebouncedValue