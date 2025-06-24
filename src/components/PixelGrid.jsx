import React from 'react';

const PixelGrid = ({ grid, onPixelClick }) => {
  return (
    <div className="grid grid-cols-8 gap-1 p-4 bg-gray-100 rounded-lg shadow-inner">
      {grid.map((row, rowIndex) =>
        row.map((pixel, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`pixel-square ${pixel ? 'pixel-on' : 'pixel-off'}`}
            onClick={() => onPixelClick(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
};

export default PixelGrid;
