import { useState, useEffect } from 'react';

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const match = window.matchMedia(query);
    const handler = (event) => setMatches(event.matches);

    // Initial check on mount
    setMatches(match.matches);

    match.addEventListener('change', handler);

    return () => match.removeEventListener('change', handler);
  }, [query]);

  return matches;
};