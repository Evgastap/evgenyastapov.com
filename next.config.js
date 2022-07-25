module.exports = {
  // https://github.com/vercel/next.js/issues/21079
  // Remove this workaround whenever the issue is fixed
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/evgenyastapov-com/image/upload/",
  },
};
