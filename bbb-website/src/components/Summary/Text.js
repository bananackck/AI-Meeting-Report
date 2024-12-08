import React from "react";
import { useEffect, useState } from "react";

const backendURL = "https://2d6c-34-125-22-126.ngrok-free.app/";
const backendURLsummary = backendURL + "summary";
const backendURLdictionary = backendURL + "receive-dictionary";

const TextsContext = React.createContext({
  texts: [],
  fetchTexts: () => {},
});

function Text() {
  const [texts, setTexts] = useState([]);
  const [fills, setFills] = useState([]);

  const fetchTexts = async () => {
    const response = await fetch(backendURLsummary, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const texts = await response.json();
    console.log(texts);
    setTexts(texts.data);
  };

  // 텍스트 업데이트 함수
  const updateText = (index, newValue) => {
    const updatedTexts = [...texts];
    updatedTexts[index].item = newValue; // 클라이언트 측 상태 업데이트
    setTexts(updatedTexts);

    // FastAPI로 업데이트된 데이터 전송
    const textToUpdate = updatedTexts[index];
    updateTextOnServer(textToUpdate.id, textToUpdate.item);
  };

  // FastAPI로 데이터 업데이트 요청
  const updateTextOnServer = async (id, updatedValue) => {
    try {
      const response = await fetch(backendURLsummary + `${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify({ id, item: updatedValue }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update text on server: ${response.status}`);
      }

      const result = await response.json();
      console.log("Server updated:", result);
    } catch (error) {
      console.error("Error updating text on server:", error.message);
    }
  };

  useEffect(() => {
    fetchTexts();
  }, []);

  // FastAPI로 딕셔너리 전송
  const sendDictionaryToServer = async () => {
    // 딕셔너리 생성
    const dictionary = texts.reduce((acc, current) => {
      acc[current.name] = current.item;
      return acc;
    }, {});

    console.log(
      "Sending data to server2:",
      JSON.stringify({ data: dictionary })
    );
    try {
      const response = await fetch(
        backendURLdictionary, // FastAPI 엔드포인트
        {
          method: "POST", // POST 요청
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
          body: JSON.stringify({ data: dictionary }), // 딕셔너리를 JSON으로 변환
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Server response:", result);
      console.log(JSON.stringify({ data: dictionary }, null, 2));
    } catch (error) {
      console.error("Error sending dictionary:", error.message);
    }
  };

  return (
    <div className="text-card">
      <h1>회의록</h1>

      <table>
        <TextsContext.Provider value={{ texts, fetchTexts }}>
          <tbody>
            {texts.map((text, index) => (
              <tr key={index} className="table-content">
                <th className="table-header">{text.name}</th>
                <td>
                  <textarea
                    className="table-input"
                    name={`postContent-${index}`}
                    defaultValue={text.item}
                    rows={2}
                    cols={50}
                    onChange={(e) => updateText(index, e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </TextsContext.Provider>
      </table>
      <button className="UploadBtn" onClick={sendDictionaryToServer}>
        저장
      </button>
    </div>
  );
}

export default Text;
