import React from 'react';
import PixelGrid from './components/PixelGrid';
import ControlPanel from './components/ControlPanel';
import usePixelArt from './hooks/usePixelArt';

function App() {
  const { grid, togglePixel, mirrorGrid, clearGrid } = usePixelArt();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Pixel Art Creator
          </h1>
          <p className="text-gray-600 text-sm">
            Create retro pixel art one click at a time!
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <PixelGrid grid={grid} onPixelClick={togglePixel} />
        </div>

        <ControlPanel onMirror={mirrorGrid} onClear={clearGrid} />
      </div>
    </div>
  );
}

export default App;
