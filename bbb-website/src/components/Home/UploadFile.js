import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDrivePicker from "react-google-drive-picker";

const backendURL = "https://2d6c-34-125-22-126.ngrok-free.app/";
const backendURLcreate = backendURL + "create";
const meetingreportsContext = React.createContext({
  meetingreports: [],
  fetchMeetingreport: () => {},
});

function UploadFile() {
  //Google Drive

  const [fileAudio, setFileAudio] = useState("");
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [openPicker, data] = useDrivePicker();
  const gToken =
    "ya29.a0AeDClZDGQLA8z09GP2Ouf6-eVibofxb4r62YXwuVUwWErx0oumHkQ94UbhOulSCP81KzlSwea41RfxyOgpmgp28zM5eS_-mSAJc1NfPnzYpC3cvA-knjEay3ITlpN7NGu13Ovpb9SH5Fr_Rt1Rx9KAmkIBLLHfyZ2Cp9tSWVaCgYKAZsSARISFQHGX2Mi58yKCfnhC-0VM2s7phCHCw0175";

  function handleOpenPicker() {
    openPicker({
      clientId:
        "372486324653-k5i3hplcc837g9de1bk85o1dgq3da6v4.apps.googleusercontent.com",
      developerKey: "AIzaSyCoFxrW-FJ9TfP45Fg6n-JPJ553stcBsgM", //API key
      viewId: "DOCS",
      token: gToken,
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        if (data.action === "picked") {
          if (data.viewToken[0] === "upload") {
            setFileAudio(data.docs[0].name);
            console.log(data.docs[0].name);
            //console.log("it's uploaded");
          }
        }
      },
    });
  }

  const [meetingreports, setMeetingreports] = useState([]);

  const fetchMeetingreport = async () => {
    const response = await fetch(backendURLcreate, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const meetingreports = await response.json();
    console.log(meetingreports);
    console.log("Meeting report ready!!");
    setMeetingreports(meetingreports.data);
  };

  useEffect(() => {
    console.log("useEffect");
    if (data) {
      console.log("data=", data);
    }
    // fetchMeetingreport ()
  }, [data]);

  return (
    <React.Fragment>
      <button
        className="UploadBtn"
        onClick={() => {
          handleOpenPicker();
        }}
      >
        파일 업로드
      </button>

      <span> </span>

      <button
        className="UploadBtn"
        onClick={() => {
          fetchMeetingreport();
          if (fileAudio) {
            console.log("회의록 생성 버튼 클릭됨:", fileAudio);
            // 파일이 선택되었으면, convert 페이지로 이동
            // navigate("/convert");
          }
        }}
      >
        회의록 생성
      </button>
    </React.Fragment>
  );
}

export default UploadFile;
