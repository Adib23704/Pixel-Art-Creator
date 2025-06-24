import { useState, useCallback, useRef } from 'react';

const usePixelArt = () => {
  const [grid, setGrid] = useState(() => 
    Array(8).fill().map(() => Array(8).fill(false))
  );
  
  const [isDragging, setIsDragging] = useState(false);
  const [dragMode, setDragMode] = useState(null); // 'paint' or 'erase'
  const dragModeRef = useRef(null);

  const togglePixel = useCallback((row, col) => {
    setGrid(prevGrid => {
      const newGrid = prevGrid.map(r => [...r]);
      newGrid[row][col] = !newGrid[row][col];
      return newGrid;
    });
  }, []);

  const startDrag = useCallback((row, col) => {
    setIsDragging(true);
    const currentPixelState = grid[row][col];
    const newDragMode = !currentPixelState ? 'paint' : 'erase';
    setDragMode(newDragMode);
    dragModeRef.current = newDragMode;
    
    // Toggle the clicked pixel
    togglePixel(row, col);
  }, [grid, togglePixel]);

  const handleDrag = useCallback((row, col) => {
    if (!isDragging || dragModeRef.current === null) return;
    
    setGrid(prevGrid => {
      const newGrid = prevGrid.map(r => [...r]);
      if (dragModeRef.current === 'paint') {
        newGrid[row][col] = true;
      } else {
        newGrid[row][col] = false;
      }
      return newGrid;
    });
  }, [isDragging]);

  const endDrag = useCallback(() => {
    setIsDragging(false);
    setDragMode(null);
    dragModeRef.current = null;
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
    isDragging,
    togglePixel,
    startDrag,
    handleDrag,
    endDrag,
    mirrorGrid,
    clearGrid
  };
};

export default usePixelArt;
