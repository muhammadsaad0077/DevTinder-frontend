// For production
// export const base_url = "/api";

// For dev
  export const base_url = location.hostname === "localhost"? "http://localhost:3001": "/api";