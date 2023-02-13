module.exports = {
  apps: [{
    name: "cicd-v2-test",
    script: "index.js",
    instances: 1,
    exec_mode: "cluster"
  }]
};
