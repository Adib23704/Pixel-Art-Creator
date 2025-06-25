const ControlPanel = ({ onMirror, onClear, onSave }) => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mt-8">
      <button
        onClick={onMirror}
        className="mirror-button"
        title="Mirror your pixel art horizontally"
      >
        Mirror
      </button>
      
      <button
        onClick={onSave}
        className="save-button"
        title="Save your pixel art as PNG"
      >
        Save
      </button>
      
      <button
        onClick={onClear}
        className="clear-button"
        title="Clear the canvas for a fresh start"
      >
        Clear
      </button>
    </div>
  );
};

export default ControlPanel;