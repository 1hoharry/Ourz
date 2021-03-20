module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:address",
        destination: "http://localhost:5000/api/:address",
      },
    ];
  },
};
