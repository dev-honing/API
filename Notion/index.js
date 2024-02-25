// index.js

const express = require('express');
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

// 데이터 요청
app.get('/', async (req, res) => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.DATABASE_ID,
    });
    // 가져온 데이터를 템플릿 엔진을 사용하여 HTML로 렌더링
    res.render('index', { data: response.results });
  } catch (error) {
    console.error('데이터 가져오기 실패:', error);
    res.status(500).send('서버 에러');
  }
});

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버 ON: http://localhost:${PORT}`);
});
