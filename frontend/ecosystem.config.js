require('dotenv').config();

module.exports = {
  apps: [{
    name: 'api-service',
    script: './dist/app.js',
  }],

  // Настройка деплоя
  deploy: {
    production: {
      repo: 'https://github.com/AleksandrDronov/web-plus-pm2-deploy',
      'post-deploy': 'npm i && npm run build',
    },
  },
};