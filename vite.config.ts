import { defineConfig } from 'vite';
import banner from 'vite-plugin-banner';
import pkg from './package.json';

// https://cn.vitejs.dev/config/
export default defineConfig({
  plugins: [
    banner(
      `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * descriptioin: ${pkg.description}\n * author: ${pkg.author}\n * homepage: ${pkg.homepage}\n */`
    ),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/index.ts',
      // 输出UMD格式时，需要指定一个全局变量的名称
      name: 'randomit',
      // 输出格式
      formats: ['es', 'cjs', 'umd'],
      fileName: format => {
        switch (format) {
          case 'es':
            return 'index.mjs';
          case 'cjs':
            return 'index.cjs';
          case 'umd':
            return 'index.min.js';
          default:
            return 'index.min.js';
        }
      },
    },
    // 压缩混淆构建后的文件
    minify: true,
  },
});
