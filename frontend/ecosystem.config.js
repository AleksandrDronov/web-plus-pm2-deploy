const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env.deploy') });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps: [{
    name: 'frontend',
    script: './build/index.html',
  }],

  // Настройка деплоя
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'git@github.com:AleksandrDronov/web-plus-pm2-deploy.git',
      path: DEPLOY_PATH,
      'post-deploy': `cd ${DEPLOY_PATH}source/frontend && npm i && npm run build`,
    },
  },
};