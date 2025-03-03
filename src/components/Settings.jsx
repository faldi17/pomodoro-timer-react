function Settings({ setWorkTime, setBreakTime }) {
  return (
    <div className="mt-4">
      <label className="block">Work Time (minutes):</label>
      <input type="number" min="1" defaultValue="25" onChange={(e) => setWorkTime(e.target.value * 60)} className="border p-1 rounded" />
      <label className="block mt-2">Break Time (minutes):</label>
      <input type="number" min="1" defaultValue="5" onChange={(e) => setBreakTime(e.target.value * 60)} className="border p-1 rounded" />
    </div>
  );
}

export default Settings;
