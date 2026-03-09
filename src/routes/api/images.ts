import { Router, Request, Response } from 'express';
import path from 'path';
import processImage from '../../services/imageProcessor';

const router = Router();

router.get(
  '/',
  async (req: Request, res: Response): Promise<void> => {
    const { filename, width, height } = req.query;

    // check if the interface parameters are provided
    if (!filename || !width || !height) {
      res.status(400).json({
        error:
          'Please provide: filename, width, and height',
      });
      return;
    }

    // convertion to number
    const parsedWidth = parseInt(width as string, 10);
    const parsedHeight = parseInt(height as string, 10);

    // edge case if the width or height were negative
    if (
      isNaN(parsedWidth) ||
      isNaN(parsedHeight) ||
      parsedWidth <= 0 ||
      parsedHeight <= 0
    ) {
      res.status(400).json({
        error:
          'Width and height must be a positive numbers',
      });
      return;
    }

    try {
      const outputPath = await processImage({
        filename: filename as string,
        width: parsedWidth,
        height: parsedHeight,
      });

      if (!outputPath) {
        res
          .status(404)
          .json({ error: `Image "${filename}" not found` }); //404 resource not found
        return;
      }

      res.sendFile(path.resolve(outputPath));
    } catch {
      res.status(500).json({ error: 'server error' }); // server error
    }
  }
);

export default router;
