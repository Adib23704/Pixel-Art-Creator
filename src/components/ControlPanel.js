import '../styles/ControlPanel.css';

const ControlPanel = ({ onMirror, onClear }) => {
  return (
    <div className="control-panel">
      <h3>🕹️ Controls</h3>
      <div className="button-group">
        <button 
          className="control-btn mirror-btn" 
          onClick={onMirror}
          title="Flip your art horizontally"
        >
          🪞 Mirror Magic
        </button>
        <button 
          className="control-btn clear-btn" 
          onClick={onClear}
          title="Start fresh with a clean canvas"
        >
          🧹 Clear Canvas
        </button>
      </div>
      <div className="instructions">
        <p>💡 <strong>Click any square</strong> to toggle pixels ON/OFF</p>
        <p>🎯 Create mini sprites, faces, or geometric patterns!</p>
      </div>
    </div>
  );
};

export default ControlPanel;
