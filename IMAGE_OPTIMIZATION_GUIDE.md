# Image Optimization Guide

## ✅ Implemented Optimizations

### 1. **Priority Loading** ⚡

- First 2 trending images load with `priority` prop
- First 8 recommended images load with `priority` prop
- Prevents layout shift and improves LCP (Largest Contentful Paint)

### 2. **Blur Placeholder** 🌫️

- Added tiny base64-encoded blur placeholder
- Shows while image loads for better UX
- Minimal bundle size impact

### 3. **Optimized Image Quality** 📊

- Changed from quality=10 to quality=75
- Better balance between file size and visual quality
- Quality=10 was too low and caused pixelation

### 4. **Responsive Sizes** 📱

- **Trending**: `(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 470px`
- **Recommended**: `(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px`
- Loads appropriate image size per device

### 5. **Modern Image Formats** 🖼️

- Enabled AVIF and WebP formats in next.config.mjs
- Automatically serves best format per browser
- ~30-50% smaller file sizes

### 6. **Image Caching** 💾

- Set `minimumCacheTTL: 60` seconds
- Reduces redundant requests
- Improves subsequent page loads

---

## 🚀 Additional Optimizations You Can Implement

### 7. **Pagination/Infinite Scroll**

Instead of loading all movies at once, load them in batches:

```typescript
// In your API calls
export async function getPopularMovies(type: string, page: number = 1) {
  const response = await fetch(
    `${BASE_URL}/${type}/popular?api_key=${API_KEY}&page=${page}`,
  );
  // ... rest of code
}
```

Then implement infinite scroll or pagination buttons to load more.

### 8. **Virtual Scrolling** (Advanced)

For very long lists, use libraries like:

- `react-window` or `react-virtual`
- Only renders visible items in viewport
- Massive performance improvement for 100+ items

```bash
npm install react-window
```

### 9. **Request Smaller Images from TMDB**

TMDB offers multiple sizes. Currently using full size:

```typescript
// Current
`${IMAGE_BASE_URL}${movie.poster_path}`// Optimize with size parameter
`${IMAGE_BASE_URL}/w500${movie.poster_path}` // For large cards
`${IMAGE_BASE_URL}/w342${movie.poster_path}` // For small cards
`${IMAGE_BASE_URL}/w185${movie.poster_path}`; // For thumbnails
```

Update your IMAGE_BASE_URL in constants:

```typescript
// In constant.ts
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
// Or create multiple constants for different sizes
export const IMAGE_SIZES = {
  small: "https://image.tmdb.org/t/p/w185",
  medium: "https://image.tmdb.org/t/p/w342",
  large: "https://image.tmdb.org/t/p/w500",
  original: "https://image.tmdb.org/t/p/original",
};
```

### 10. **Implement Image CDN** (Production)

For production, consider:

- Cloudinary
- Imgix
- AWS CloudFront

### 11. **Service Worker Caching** (PWA)

Cache images for offline access:

```javascript
// In service worker
self.addEventListener("fetch", (event) => {
  if (event.request.destination === "image") {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      }),
    );
  }
});
```

### 12. **Limit Initial Data Load**

In your page components:

```typescript
// Instead of loading all 20 results
const trendingData = await getTrendingMovies("all");

// Load first 10, lazy load rest
const trendingData = (await getTrendingMovies("all")).slice(0, 10);
```

---

## 📊 Performance Metrics to Monitor

Use Lighthouse or Chrome DevTools to check:

- **LCP** (Largest Contentful Paint) - should be < 2.5s
- **CLS** (Cumulative Layout Shift) - should be < 0.1
- **FID** (First Input Delay) - should be < 100ms
- **Total Bundle Size** - check Network tab
- **Number of Requests** - fewer is better

---

## 🎯 Quick Wins Summary

| Optimization        | Impact | Effort | Status         |
| ------------------- | ------ | ------ | -------------- |
| Priority Loading    | High   | Low    | ✅ Done        |
| Blur Placeholder    | Medium | Low    | ✅ Done        |
| Quality 75          | High   | Low    | ✅ Done        |
| Responsive Sizes    | High   | Low    | ✅ Done        |
| Modern Formats      | High   | Low    | ✅ Done        |
| Smaller TMDB Images | High   | Low    | 🔄 Recommended |
| Pagination          | High   | Medium | 🔄 Recommended |
| Virtual Scroll      | Medium | High   | 🔄 Optional    |

---

## 🔧 Testing Your Optimizations

1. **Clear browser cache**
2. **Open DevTools Network tab**
3. **Throttle to Fast 3G**
4. **Reload page and observe**:
   - How fast first images appear
   - Total data transferred
   - Number of requests
   - Loading experience

---

## 💡 Best Practices

- ✅ Use `priority` for above-the-fold images only (< 10 images)
- ✅ Always use `loading="lazy"` for below-the-fold images
- ✅ Set appropriate `sizes` attribute
- ✅ Use quality 75-85 for photos (balance size/quality)
- ✅ Implement skeleton UI while loading
- ✅ Use modern formats (AVIF/WebP)
- ❌ Don't load all data at once
- ❌ Don't use quality < 50 (too pixelated)
- ❌ Don't use original size images when smaller works

---

Ready to implement more? Start with using smaller TMDB image sizes - it's a 5-minute change with huge impact! 🚀
