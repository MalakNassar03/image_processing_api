import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

// Define the interface for the options
interface ProcessOptions {
  filename: string;
  width: number;
  height: number;
}

const fullDir = path.join(__dirname, '../../images/Full');
const thumbnailDir = path.join(
  __dirname,
  '../../images/Thumbnail'
);

const processImage = async (
  options: ProcessOptions
): Promise<string | null> => {
  const { filename, width, height } = options;

  const inputPath = path.join(fullDir, `${filename}.jpg`);
  const outputPath = path.join(
    thumbnailDir,
    `${filename}-${width}x${height}.jpg`
  );

  //check if the og image exists if not return null
  if (!fs.existsSync(inputPath)) {
    return null;
  }

  // check if the already thumbnail exists
  if (fs.existsSync(outputPath)) {
    return outputPath; // Return path
  }

  // If the thumbnail doesn't exist, process it'
  await sharp(inputPath)
    .resize(width, height)
    .toFormat('jpeg')
    .toFile(outputPath);

  return outputPath;
};

export default processImage;
