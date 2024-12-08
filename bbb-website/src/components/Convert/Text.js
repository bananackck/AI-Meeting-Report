import React from "react";
import { useEffect, useState } from "react";

const TextsContext = React.createContext({
  texts: [],
  fetchTexts: () => {},
});

function Text() {
  const [texts, setTexts] = useState([]);
  const fetchTexts = async () => {
    const response = await fetch(
      "https://de5c-34-143-184-211.ngrok-free.app/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

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
