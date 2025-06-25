import { useEffect } from 'react';
import PixelGrid from './components/PixelGrid';
import ControlPanel from './components/ControlPanel';
import usePixelArt from './hooks/usePixelArt';
import { saveGridAsPNG } from './utils/saveAsPNG';

function App() {
  const { 
    grid, 
    isDragging,
    startDrag,
    handleDrag,
    endDrag,
    mirrorGrid, 
    clearGrid 
  } = usePixelArt();

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        endDrag();
      }
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    return () => document.removeEventListener('mouseup', handleGlobalMouseUp);
  }, [isDragging, endDrag]);

  const handleSave = () => {
    const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
    saveGridAsPNG(grid, `pixel-art-${timestamp}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-4">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="glass-card rounded-3xl p-4 sm:p-8 max-w-lg w-full relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-3">
            <span className="text-white">🎮</span> Pixel Art Creator
          </h1>
          <p className="text-gray-600 text-sm font-medium">
            Built with 💖 by <a href="https://adibdev.me" target="_blank"><b>Adib</b></a>
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="flex justify-center mb-6">
          <PixelGrid 
            grid={grid} 
            onMouseDown={startDrag}
            onMouseEnter={handleDrag}
            onMouseUp={endDrag}
            isDragging={isDragging}
          />
        </div>

        <ControlPanel 
          onMirror={mirrorGrid} 
          onClear={clearGrid}
          onSave={handleSave}
        />

        <div className="text-center mt-4 text-gray-500 text-xs">
          <p>Hold and drag to paint multiple pixels at once</p>
        </div>
      </div>
    </div>
  );
}

export default App;