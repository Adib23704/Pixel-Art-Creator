export const saveGridAsPNG = (grid, filename = 'pixel-art') => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  const pixelSize = 50;
  const canvasSize = 8 * pixelSize;
  canvas.width = canvasSize;
  canvas.height = canvasSize;
  
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvasSize, canvasSize);
  
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
