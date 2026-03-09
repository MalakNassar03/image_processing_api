import processImage from '../../services/imageProcessor';
import fs from 'fs';

describe('imageProcessor utility', () => {
  it('returns null fo an image file that doesnt exist', async () => {
    const result = await processImage({
      filename: 'doesnotexist',
      width: 100,
      height: 100,
    });
    expect(result).toBeNull();
  });

  it('returns a path for an existing image', async () => {
    const result = await processImage({
      filename: 'fjord',
      width: 100,
      height: 100,
    });
    expect(result).not.toBeNull();
    expect(fs.existsSync(result as string)).toBeTrue();
  });

  it('uses the cached image when the second image is done', async () => {
    const result1 = await processImage({
      filename: 'fjord',
      width: 50,
      height: 50,
    });
    const result2 = await processImage({
      filename: 'fjord',
      width: 50,
      height: 50,
    });
    expect(result1).toEqual(result2);
  });
});
