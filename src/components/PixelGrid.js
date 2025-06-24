 import '../styles/PixelGrid.css';

const PixelGrid = ({ pixels, onPixelClick }) => {
  return (
    <div className="pixel-grid-container">
      <h2>🎨 8×8 Canvas</h2>
      <div className="pixel-grid">
        {pixels.map((row, rowIndex) =>
          row.map((isOn, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`pixel ${isOn ? 'pixel-on' : 'pixel-off'}`}
              onClick={() => onPixelClick(rowIndex, colIndex)}
              title={`Pixel (${rowIndex + 1}, ${colIndex + 1})`}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PixelGrid;
