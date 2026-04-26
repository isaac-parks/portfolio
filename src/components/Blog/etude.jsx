import { useEffect } from "react";
import text from './article-text.jsx'
export default function Etude({ color }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <> 
    {text.etude(color)}
    </>
  );
}
