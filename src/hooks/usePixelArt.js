import { useState, useCallback } from 'react';

const usePixelArt = () => {
  const [grid, setGrid] = useState(() => 
    Array(8).fill().map(() => Array(8).fill(false))
  );

  const togglePixel = useCallback((row, col) => {
    setGrid(prevGrid => {
      const newGrid = prevGrid.map(r => [...r]);
      newGrid[row][col] = !newGrid[row][col];
      return newGrid;
    });
  }, []);

  const mirrorGrid = useCallback(() => {
    setGrid(prevGrid => 
      prevGrid.map(row => [...row].reverse())
    );
  }, []);

  const clearGrid = useCallback(() => {
    setGrid(Array(8).fill().map(() => Array(8).fill(false)));
  }, []);

  return {
    grid,
    togglePixel,
    mirrorGrid,
    clearGrid
  };
};

export default usePixelArt;
