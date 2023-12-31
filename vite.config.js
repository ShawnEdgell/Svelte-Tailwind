import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [svelte()],
  base: '/Svelte-Tailwind/',
  resolve: {
    alias: {
      $components: resolve(__dirname, 'src/components')
    }
  }
});
