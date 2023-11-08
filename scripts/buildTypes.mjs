import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateDtsBundle } from 'dts-bundle-generator';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function run() {
  // 项目的根目录
  const rootPath = resolve(__dirname, '..');
  const options = [
    {
      filePath: resolve(rootPath, './src/index.ts'),
      output: {
        onBanner: true,
      },
    },
  ];

  // 生成DTS文件内容
  // 插件返回一个数组，返回的文件内容顺序同选项顺序
  const bundles = generateDtsBundle(options, {
    preferredConfigPath: resolve(rootPath, './tsconfig.json'),
  });

  if (!Array.isArray(bundles) || !bundles.length) return;

  // 将DTS bundle的内容输出成 `.d.ts`文件保存到dist目录下
  // 当前只有一个文件要保存
  const bundle = bundles[0];
  const output = resolve(rootPath, './dist/index.d.ts');
  writeFileSync(output, bundle);
}

run().catch(e => console.log(e));
