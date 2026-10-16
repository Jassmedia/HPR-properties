// Prepares the founder portrait: professional 4:5 crop (removes app overlay icons at the
// bottom corners), gentle tone correction and sharpening. No AI or facial alteration.
// Usage: node scripts/process-founder.mjs <input-image>
import sharp from 'sharp';

const input = process.argv[2];
if (!input) {
  console.error('Usage: node scripts/process-founder.mjs <input-image>');
  process.exit(1);
}

const img = sharp(input).rotate();
const { width, height } = await img.metadata();

// Crop framed on the subject (head to mid-thigh), expressed as proportions of the source.
const cropW = Math.round(width * 0.62);
const cropH = Math.min(Math.round((cropW * 5) / 4), Math.round(height * 0.66));
const left = Math.round(width * 0.5 - cropW / 2 + width * 0.01);
const top = Math.max(0, Math.round(height * 0.27));

await img
  .extract({ left, top, width: cropW, height: cropH })
  .resize(960, 1200, { fit: 'cover', position: 'north' })
  .modulate({ brightness: 1.04, saturation: 0.92 })
  .linear(1.06, -6) // slight contrast lift
  .sharpen({ sigma: 0.8 })
  .webp({ quality: 84 })
  .toFile('public/images/founder.webp');

console.log('Saved public/images/founder.webp');
