import React from 'react';

const ControlPanel = ({ onMirror, onClear }) => {
  return (
    <div className="flex gap-4 justify-center mt-6">
      <button
        onClick={onMirror}
        className="retro-button"
        title="Mirror your pixel art horizontally"
      >
        🪞 Mirror Magic
      </button>
      <button
        onClick={onClear}
        className="clear-button"
        title="Clear the canvas for a fresh start"
      >
        🧹 Fresh Start
      </button>
    </div>
  );
};

export default ControlPanel;
