import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Global Chart.js configuration
if (window.Chart) {
  // 1. Force all axis / legend / tooltip text to white
  Chart.defaults.color = '#f7faff';
  // 2. Make default gridlines a darker grey so they're visible
  Chart.defaults.borderColor = 'rgba(255,255,255,0.08)';
  // 3. Lighten any dataset drawn with #0d0f14 or #1b1d24
  const origDataset = Chart.DatasetController.prototype.update;
  Chart.DatasetController.prototype.update = function() {
    this.getDataset().backgroundColor =
      this.getDataset().backgroundColor === '#0d0f14' ||
      this.getDataset().backgroundColor === '#1b1d24'
        ? '#2f353e'              // lighter charcoal
        : this.getDataset().backgroundColor;
    return origDataset.apply(this, arguments);
  };
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);