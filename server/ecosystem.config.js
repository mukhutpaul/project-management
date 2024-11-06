module.exports = {
  apps: [
    {
      name: "projet-management",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
