import { useState } from 'react';

type NoReturnFn = () => void;
type UseToggle = [boolean, NoReturnFn];

export default (initialState: boolean = false): UseToggle => {
  const [state, setState] = useState(initialState);

  const toggle = (): void => {
    setState(!state);
  };

  return [state, toggle];
};
