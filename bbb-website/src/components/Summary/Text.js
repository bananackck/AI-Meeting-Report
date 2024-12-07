import React from "react";
import { useEffect, useState } from "react";

const TextsContext = React.createContext({
  texts: [],
  fetchTexts: () => {},
});

function Text() {
  const [texts, setTexts] = useState([]);
  const fetchTexts = async () => {
    const response = await fetch("http://127.0.0.1:8000/summary");
    const texts = await response.json();
    setTexts(texts);
  };
  useEffect(() => {
    fetchTexts();
  }, []);

  return (
    <div className="text-card">
      <TextsContext.Provider value={{ texts, fetchTexts }}>
        <textarea
          name="postContent"
          defaultValue={texts}
          rows={23}
          cols={150}
        />
      </TextsContext.Provider>
    </div>
  );
}

export default Text;
