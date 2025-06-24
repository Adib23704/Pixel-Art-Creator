export const saveGridAsPNG = (grid, filename = 'pixel-art') => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Set canvas size (scale up for better quality)
  const pixelSize = 50; // Each pixel will be 50x50 in the PNG
  const canvasSize = 8 * pixelSize;
  canvas.width = canvasSize;
  canvas.height = canvasSize;
  
  // Set white background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvasSize, canvasSize);
  
  // Draw the pixel grid
  grid.forEach((row, rowIndex) => {
    row.forEach((pixel, colIndex) => {
      if (pixel) {
        ctx.fillStyle = '#000000';
        ctx.fillRect(
          colIndex * pixelSize,
          rowIndex * pixelSize,
          pixelSize,
          pixelSize
        );
      }
    });
  });
  
  // Create download link
  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${filename}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, 'image/png');
};
