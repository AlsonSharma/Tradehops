let IS_PROD = true;

const server = IS_PROD
  ? "https://tradehops.onrender.com"
  : "http://localhost:3000";

const dashboard = IS_PROD ? 
 "https://tourmaline-pie-352391.netlify.app/"
  : "http://localhost:5174";

export {server, dashboard};