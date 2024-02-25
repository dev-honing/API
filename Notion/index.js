// index.js

const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const { Client } = require('@notionhq/client');

// Express 애플리케이션 생성
const app = express();

// dotenv 설정
dotenv.config();

// 액세스 토큰 설정
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// 정적 파일 서빙 설정
app.use(express.static(path.join(__dirname, 'public')));

// 루트 라우팅
app.get('/', (req, res) => {
  res.send("Hello, Notion API!");
})

// Notion 라우팅(POST 요청 처리)
app.post('/notion', async (req, res) => {
  try {
    res.send("Notion API 요청 성공!");
  } catch (error) {
    console.error("Notion 데이터 가져오기 실패: ", error);
    res.status(500).send("서버 에러");
  }
})

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버 ON: http://localhost:${PORT}`);
});
