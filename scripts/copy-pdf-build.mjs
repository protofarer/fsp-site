import { copyFile, readdir, mkdir } from 'fs/promises';
import { join } from 'path';

async function copyPDFs() {
  const assetsDir = 'src/assets/cms';
  const targetDir = 'dist';

  try {
    await mkdir(targetDir, { recursive: true });

    const files = await readdir(assetsDir);
    for (const file of files) {
      if (file.toLowerCase().endsWith('.pdf')) {
        await copyFile(join(assetsDir, file), join(targetDir, file));
        console.log(`Copied ${file} to ${targetDir}`);
      }
    }
  } catch (err) {
    console.error('Error copying PDFs:', err);
    process.exit(1);
  }
}

console.log(`=== Run copy pdf to dist ===`, )

await copyPDFs();
