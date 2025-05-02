
// LOCAL

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });   

// PROD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/10000/', // <-- This sets the base path for assets
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
