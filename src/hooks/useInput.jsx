import { useState, useCallback } from 'react';

function useInput(initialForm) {
  const [form, setForm] = useState(initialForm);
  // change
  const onChange = useCallback(e => {
    setForm(e.target.value);
  }, []);
  return [form, onChange];
}

export default useInput;