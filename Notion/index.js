const { Client } = require('@notionhq/client');

// 액세스 토큰 설정
const notion = new Client({
  auth: 'access_token',
});

// 데이터 요청
const response = await notion.databases.query({
  database_id: 'database_id',
});
