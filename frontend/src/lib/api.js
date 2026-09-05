export const API_URL = (import.meta.env.VITE_API_URL || (import.meta.env.DEV
    ? "/api"
    : "https://welding-website-bhnp.vercel.app/api")).replace(/\/$/, "");
