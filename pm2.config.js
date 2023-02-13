module.exports = {
  apps: [
    {
      script: 'index.js',
      instances: 1,
      exec_mode: 'cluster',
      env_dev: {
        name: 'dev_cicd',
      },
      env_uat: {
        name: 'uat_cicd',
      },
      env_prod: {
        name: 'prod_cicd',
      },
    },
  ],
};
