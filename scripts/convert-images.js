const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "./public/images";
const outputDir = "./public/optimized";

fs.mkdirSync(outputDir, { recursive: true });

fs.readdirSync(inputDir).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  const fileName = path.parse(file).name;

  // Only convert images with these formats
  if ([".jpg", ".jpeg", ".png"].includes(ext)) {
    const inputPath = path.join(inputDir, file);

    // Convert to WebP
    sharp(inputPath)
      .toFormat("webp")
      .toFile(`${outputDir}/${fileName}.webp`)
      .then(() => console.log(`✅ ${file} → ${fileName}.webp`))
      .catch((err) => console.error(` WebP failed for ${file}`, err));

    // Convert to AVIF
    sharp(inputPath)
      .toFormat("avif")
      .toFile(`${outputDir}/${fileName}.avif`)
      .then(() => console.log(`✅ ${file} → ${fileName}.avif`))
      .catch((err) => console.error(` AVIF failed for ${file}`, err));
  }
});
