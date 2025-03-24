let IS_PROD = true;

const server = IS_PROD
  ? "https://tradehops.onrender.com"
  : "http://localhost:3000";

const dashboard = IS_PROD ? 
 "https://tradehops-2.onrender.com"
  : "http://localhost:5174";

export {server, dashboard};