@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
  font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background-color: #0f172a;
  color: #ffffff;
}

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-bg text-white min-h-screen;
    background-image: radial-gradient(circle at top, rgba(108, 99, 255, 0.12), transparent 30%), linear-gradient(180deg, #0f172a, #020617);
    font-family: inherit;
  }

  * {
    box-sizing: border-box;
  }

  button, input, textarea, select {
    font: inherit;
  }
}

@layer utilities {
  .glass-card {
    @apply bg-surface/80 backdrop-blur-xl border border-white/10 shadow-glow rounded-3xl;
  }

  .glass-panel {
    @apply bg-surface/90 border border-white/10 backdrop-blur-xl rounded-3xl;
  }
}
