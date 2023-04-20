require('dotenv').config();

module.exports = {
  apps: [{
    name: 'frontend',
    script: './build/index.hnml',
  }],

  // Настройка деплоя
  deploy: {
    production: {
      repo: 'git@github.com:AleksandrDronov/web-plus-pm2-deploy.git',
      'post-deploy': 'cd /home/dronov/web-plus-pm2-deploy/source/frontend && npm i && npm run build && npx pm2 restart ecosystem.config.js',
    },
  },
};