```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // <-- The bug may lie here
  theme: {
    extend: {
      // ... your custom theme configurations ...
    },
  },
  plugins: [],
};
```