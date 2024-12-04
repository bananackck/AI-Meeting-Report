import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UploadFile() {
  const fileInput = React.useRef(null);
  const [fileAudio, setFileAudio] = useState("");
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 파일 입력 요소의 값이 변경되면 호출되는 함수
  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    if (selectedFile) {
      setFileAudio(selectedFile.name); // 파일 이름을 상태로 설정
    }
  };

  useEffect(() => {
    // fileAudio 값이 변경될 때마다 호출되는 코드
    if (fileAudio) {
      console.log("선택된 파일:", fileAudio);
    }
  }, [fileAudio]);

  return (
    <React.Fragment>
      <button
        className="UploadBtn"
        onClick={() => {
          fileInput.current.click();
        }}
      >
        파일 업로드
      </button>
      <span> </span>

      <button
        className="UploadBtn"
        onClick={() => {
          if (fileAudio) {
            console.log("회의록 생성 버튼 클릭됨:", fileAudio);
            // 파일이 선택되었으면, convert 페이지로 이동
            navigate("/convert");
          }
        }}
      >
        회의록 생성
      </button>

      {/* 파일 입력 요소 */}
      <input
        type="file"
        ref={fileInput}
        onChange={handleChange}
        accept="audio/*"
        style={{ display: "none" }}
      />
    </React.Fragment>
  );
}

export default UploadFile;
