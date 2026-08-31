// In development the Vite proxy forwards /api to the Express server.
// In production set VITE_API_URL=https://your-backend.example.com/api
const API_URL = (import.meta.env.VITE_API_URL || "/api").replace(/\/$/, "");
export default API_URL;
