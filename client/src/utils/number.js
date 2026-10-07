export const formatCompactNumber = (number) => {
  return new Intl.NumberFormat('en-IN', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(number || 0);
};

export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
