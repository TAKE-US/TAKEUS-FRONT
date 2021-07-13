import { useState, useCallback } from "react";

function useInput(initialForm) {
  const [form, setForm] = useState(initialForm);
  // change
  const onChange = useCallback(evt => {
    setForm(evt.target.value);
  }, []);
  return [form, onChange];
}

export default useInput;
