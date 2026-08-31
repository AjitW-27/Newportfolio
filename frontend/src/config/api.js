// If VITE_API_URL is provided, use it and append /api. Otherwise use /api for local proxy.
const rawUrl = import.meta.env.VITE_API_URL || "";
const cleanUrl = rawUrl.replace(/\/$/, "");

const API_URL = cleanUrl ? `${cleanUrl}/api` : "/api";

export default API_URL;