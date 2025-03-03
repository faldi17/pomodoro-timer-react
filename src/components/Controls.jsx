function Controls({ isRunning, setIsRunning, resetTimer }) {
  return (
    <div className="flex gap-4 mt-4">
      <button className="bg-green-500 text-white p-2 rounded" onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button className="bg-red-500 text-white p-2 rounded" onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Controls;
