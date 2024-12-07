from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
import os


app = FastAPI()

origins = [
    "http://localhost:3000",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
async def root():
    # 파일 이름만 바꾸면서 실행하기
    file_name="output_final_test1.txt"
    file_path = "C:/Users/emill/Downloads/"+file_name

    with open(file_path, 'r', encoding='utf-8') as f:
      text = f.read()
    return text


@app.get("/summary")
async def get_files():
    file_name="summary.txt"
    file_path = "C:/Users/emill/Downloads/"+file_name

    with open(file_path, 'r', encoding='utf-8') as f:
      text = f.read()
    return text