const PixelGrid = ({ 
  grid, 
  onMouseDown, 
  onMouseEnter, 
  onMouseUp,
  isDragging 
}) => {
  return (
    <div 
      className="pixel-grid-container select-none"
      onMouseLeave={onMouseUp}
    >
      <div className="grid grid-cols-8 gap-1">
        {grid.map((row, rowIndex) =>
          row.map((pixel, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`pixel-square ${pixel ? 'pixel-on' : 'pixel-off'}`}
              onMouseDown={(e) => {
                e.preventDefault();
                onMouseDown(rowIndex, colIndex);
              }}
              onMouseEnter={() => onMouseEnter(rowIndex, colIndex)}
              onMouseUp={onMouseUp}
              style={{
                userSelect: 'none',
                WebkitUserSelect: 'none',
                cursor: isDragging ? 'grabbing' : 'pointer'
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PixelGrid;
