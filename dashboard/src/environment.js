let IS_PROD = true;

const server = IS_PROD
  ? "https://tradehops.onrender.com"
  : "http://localhost:3000";


  const frontend = IS_PROD ? 
 "https://tradehops-1.onrender.com"
  : "http://localhost:5173";

export {server, frontend};