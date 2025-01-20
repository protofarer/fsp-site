import { copyFile, readdir, mkdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { glob } from 'glob';

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

async function transformPDFUrls() {
  console.log(`RUN transformPDFUrls`);
  const sourcePattern = 'src/assets/cms';

  try {
    const files = await glob('src/content/**/*.md');

    for (const file of files) {
      let content = await readFile(file, 'utf-8');
      const originalContent = content;

      // Transform URLs in both markdown links and YAML frontmatter
      content = content.replace(
        new RegExp(`(?:\\(|: )\\/${sourcePattern}\\/(.*?\\.pdf)`, 'g'),
        (match, pdfFile) => {
          // If it started with '(', wrap in parentheses, otherwise keep the colon-space
          return match.startsWith('(') ? `(/${pdfFile}` : `: /${pdfFile}`;
        }
      );

      if (content !== originalContent) {
        await writeFile(file, content);
        console.log(`Updated PDF links in ${file}`);
      }
    }
  } catch (err) {
    console.error('Error transforming PDF URLs:', err);
    process.exit(1);
  }
}

console.log(`=== Running pdf build script ===`);

await copyPDFs();
await transformPDFUrls();
