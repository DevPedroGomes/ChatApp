import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: process.env.TARGET || 'http://localhost:5000', // Use HTTP para desenvolvimento local
        changeOrigin: true,
      },
      '/socket.io': {
        target: process.env.TARGET || 'http://localhost:5000',
        ws: true, // Habilitar proxy para WebSocket
        changeOrigin: true,
      },
    },
  },
});
