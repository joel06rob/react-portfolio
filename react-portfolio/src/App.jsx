
function App() {
  return(
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 animate-pulseGrid"
      style={{
      backgroundImage: `
        linear-gradient(rgba(15, 37, 125,0.1) 1px, transparent 1px),
        linear-gradient(90deg,rgba(15, 37, 125,0.1) 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px"
      }}>
        <div className="max-w-5xl mx-auto px-4">
          
        </div>
      </div>
    </div>
  );
}

export default App
