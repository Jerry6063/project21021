import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  // For GitHub Pages:
  // - Project site: https://<user>.github.io/<repo>/  -> BASE_PATH="/<repo>/"
  // - User/Org site: https://<user>.github.io/       -> BASE_PATH="/"
  const base = process.env.BASE_PATH || '/';

  return {
    base,
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
