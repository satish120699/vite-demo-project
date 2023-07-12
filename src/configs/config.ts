export const config = {
  baseUrl: {
    client: import.meta.env.VITE_CLIENT_BASE_URL as string,
    server: import.meta.env.VITE_SERVER_BASE_URL as string,
  },
};
