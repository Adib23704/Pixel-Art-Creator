const ControlPanel = ({ onMirror, onClear, onSave }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mt-8">
      <button
        onClick={onMirror}
        className="mirror-button"
        title="Mirror your pixel art horizontally"
      >
        <span className="mr-2">🪞</span>
        Mirror
      </button>
      
      <button
        onClick={onSave}
        className="save-button"
        title="Save your pixel art as PNG"
      >
        <span className="mr-2">💾</span>
        Save PNG
      </button>
      
      <button
        onClick={onClear}
        className="clear-button"
        title="Clear the canvas for a fresh start"
      >
        <span className="mr-2">🧹</span>
        Clear
      </button>
    </div>
  );
};

export default ControlPanel;
