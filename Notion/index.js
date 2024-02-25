// index.js
const dotenv = require('dotenv');
const { Client } = require('@notionhq/client');

// dotenv 설정
dotenv.config();

// 액세스 토큰 설정
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// 데이터 요청
const response = await notion.databases.query({
  database_id: process.env.DATABASE_ID,
});
