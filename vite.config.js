import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import postcssNested from 'postcss-nested'
// import * as donk from 'postcss-nested';
// console.log('donk: ', donk);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  css: {
    postcss: {
      plugins: [postcssNested],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    commonjsOptions: { transformMixedEsModules: true }, // Change,
    outDir: 'docs'
  }
})
