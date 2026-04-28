import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  return(
    <div className="relative min-h-screen bg-black text-white">
      <div className="absolute inset-0 z-0 animate-pulseGrid"
      style={{
      backgroundImage: `
        linear-gradient(rgba(255, 255, 255,0.05) 1px, transparent 1px),
        linear-gradient(90deg,rgba(255, 255, 255,0.05) 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px"
      }}/>
        <About></About>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <Experience></Experience>
          <Education></Education>
          <Skills></Skills>
        </div>

    </div>
  );
}

export default App
