let IS_PROD = true;

const server = IS_PROD
  ? "https://tradehops.onrender.com"
  : "http://localhost:3000";

const dashboard = IS_PROD ? 
 "https://radiant-sable-4e0007.netlify.app"
  : "http://localhost:5174";

export {server, dashboard};