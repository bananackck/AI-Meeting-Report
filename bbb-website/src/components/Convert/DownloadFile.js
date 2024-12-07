import React, { useState, useEffect, useInsertionEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDrivePicker from "react-google-drive-picker";

function DownloadFile() {
  const fileInput = React.useRef(null);
  const [fileAudio, setFileAudio] = useState("");
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 파일 입력 요소의 값이 변경되면 호출되는 함수
  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    if (selectedFile) {
      setFileAudio(selectedFile.name); // 파일 이름을 상태로 설정
    }
  };

  //다운로드 만들기이이ㅣㅇ이ㅣㅇ
  return (
    <React.Fragment>
      <button
        className="UploadBtn"
        onClick={() => {
          console.log("btn clicked");
        }}
      >
        파일 다운로드
      </button>
      <span> </span>
    </React.Fragment>
  );
}

export default DownloadFile;
