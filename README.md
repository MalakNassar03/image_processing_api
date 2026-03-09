# Image Processing

A Node.js/Express API that resizes and caches images on demand.

## Setup

1. Install dependencies:
```
npm install
```

2. Add `.jpg` images to `images/Full/`

3. Start the server:
```
npm run dev
```

## Endpoint
```
GET /api/images?filename={name}&width={width}&height={height}
```

**Example:**
```
http://localhost:3000/api/images?filename=fjord&width=300&height=200
```

**Parameters:**
- `filename` — image name without extension
- `width` — desired width in pixels
- `height` — desired height in pixels

**Responses:**
- `200` — resized image returned
- `400` — missing or invalid parameters
- `404` — image not found
- `500` — server error

## Scripts

- `npm run dev` — development server
- `npm run build` — compile TypeScript
- `npm start` — production server
- `npm test` — run tests
- `npm run lint` — check code
- `npm run Format` — Format all files

## Notes

- First request resizes and caches the image in `images/Thumbnail/`
- Repeated requests serve from cache instantly
- Only `.jpg` files are supported