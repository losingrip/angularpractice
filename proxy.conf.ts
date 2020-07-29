// 代理配置文件 修改后需重启项目
const SERVER_URL = {
  zxr: 'http://localhost:8080/', // 曾小锐
};
const PROXY_CONFIG = [
  {
    context: [
      '/api'
    ],
    target: SERVER_URL.zxr
  }
];
module.exports = PROXY_CONFIG;
