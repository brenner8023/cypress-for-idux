import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const getPath = (path: string) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: './node_modules/@idux/components/icon/svg/*.svg',
          dest: 'idux-icons',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': getPath('./src'),
      'vue': 'vue/dist/vue.esm-bundler.js',
    }
  }
});
