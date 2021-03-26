import { useState } from "react";
function useText(initialValue) {
  const [text, setText] = useState(initialValue);
  function handleText(event) {
    setText(event.target.value);
  }
  function handleTextUpperCase(event) {
    setText(event.target.value.toUpperCase());
  }

  return [text, handleText, handleTextUpperCase];
}

export { useText };
