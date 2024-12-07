import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDrivePicker from "react-google-drive-picker";

function UploadFile() {
  //Google Drive

  const [fileAudio, setFileAudio] = useState("");
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [openPicker, data] = useDrivePicker();
  const gToken =
    "ya29.a0AeDClZAYXQgjkMHg84Z2DLo8ZMk8kRi4flUdCRZJiUeSkB_0i68w0M1g6GIIVF_QqltzU90MPluBlnQYngxV9HG90aIoF3pqFw0yjvQSXSdCJcVsM3fkIrcWRf8V1yE5TIC0Z8gzZz6rMiNR3WNbK7_yLyxv2Z8KeCv5xdCOaCgYKAQcSARISFQHGX2Mi3gd2JEg4Vx3QE3mvG-6v-g0175";

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
  useEffect(() => {
    console.log("useEffect");
    if (data) {
      console.log("data=", data);
    }
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
          if (fileAudio) {
            console.log("회의록 생성 버튼 클릭됨:", fileAudio);
            // 파일이 선택되었으면, convert 페이지로 이동
            navigate("/convert");
          }
        }}
      >
        회의록 생성
      </button>
    </React.Fragment>
  );
}

export default UploadFile;
