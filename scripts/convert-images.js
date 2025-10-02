import fs from "fs";
import path from "path";
import sharp from "sharp";

const imagesDir = path.resolve("src/assets/projectsImgs");

async function convertOne(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) return;

  const basename = path.basename(filePath, ext);
  const dir = path.dirname(filePath);
  const input = path.join(dir, `${basename}${ext}`);
  const webpOut = path.join(dir, `${basename}.webp`);
  const avifOut = path.join(dir, `${basename}.avif`);

  const buffer = fs.readFileSync(input);

  // WebP (quality 82)
  await sharp(buffer).webp({ quality: 82 }).toFile(webpOut);

  // AVIF (cqLevel ~ quality)
  await sharp(buffer).avif({ quality: 50 }).toFile(avifOut);

  console.log(`Converted: ${basename} -> webp,avif`);
}

async function run() {
  const entries = fs.readdirSync(imagesDir);
  for (const name of entries) {
    const full = path.join(imagesDir, name);
    const stat = fs.statSync(full);
    if (stat.isFile()) {
      // Only convert if outputs are missing to avoid rework
      const base = name.replace(/\.(png|jpg|jpeg)$/i, "");
      const webpExists = fs.existsSync(path.join(imagesDir, `${base}.webp`));
      const avifExists = fs.existsSync(path.join(imagesDir, `${base}.avif`));
      if (!webpExists || !avifExists) {
        try {
          await convertOne(full);
        } catch (e) {
          console.error(`Failed converting ${name}:`, e.message);
        }
      }
    }
  }
}

run();
