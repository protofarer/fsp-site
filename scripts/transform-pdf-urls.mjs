import { readFile, writeFile } from 'fs/promises';
import { glob } from 'glob';

async function transformPDFUrls() {
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

console.log(`=== Running transform pdf urls ===`);

await transformPDFUrls();
