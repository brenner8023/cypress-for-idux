import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import type { Plugin } from 'vite';
import fs from 'fs';

const getPath = (path: string) => fileURLToPath(new URL(path, import.meta.url));

export const syncFilePlugin = (): Plugin => {
  return {
    name: 'vite-plugin-sync-file',
		configureServer(server) {
      const watcher = server.watcher;
      const target = './cypress/support/commands/idux';
			watcher.add(target);
      watcher.on('add', () => {
        const files = fs.readdirSync(getPath(target)).map(item => item.replace('.ts', ''));
        const commands = files.map(item => {
          const first = item.slice(0, 1).toUpperCase();
          const rest = item.slice(1);
          const name = `i${first}${rest}`;
          return [`import ${name} from './idux/${item}';`, `...${name},`];
        });
        const [impo, expo] = commands.reduce((total, curr) => {
          total[0] += `${curr[0]}\n`;
          total[1] += `${curr[1]}\n  `;
          return total;
        }, ['', '']);

        const content = `
/**
 * @file auto generate
 */

${impo}
export const iduxCommands = {
  ${expo}
};

`;

    fs.writeFileSync(getPath('./cypress/support/commands/idux.ts'), content);
      });
		}
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    syncFilePlugin(),
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
