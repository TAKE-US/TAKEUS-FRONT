import { useState, useCallback } from "react";

function useInput(initialForm) {
  const [form, setForm] = useState(initialForm);
  // change
  const onChange = useCallback(evt => {
    evt?.target?.value ? setForm(evt.target.value) : setForm(evt);
  }, []);
  return [form, onChange];
}

export default useInput;
