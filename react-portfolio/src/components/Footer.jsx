export default function Footer(){
    return(
        <footer className="mt-20 py-6 border-t bg-black border-white/10 text-xs text-center text-gray-400 relative w-full">
            <div className="flex flex-col items-center gap-4">
                <div className="flex gap-8 text-white items-center transition-colors duration-200">
                    <a href="mailto:joel.roberts2006@gmail.com" className="hover:text-gray-200">Contact</a>
                    <div className="p-1 bg-none hover:bg-[#3d3d3d]/50 rounded-lg"><a href="https://github.com/joel06rob"><img src="/icons8-github.svg"></img></a></div>
                    <div className="p-1 bg-none hover:bg-[#3d3d3d]/50 rounded-lg"><a href="https://www.linkedin.com/in/joel-osian-roberts-8a76b02b0/"><img src="/icons8-linkedin.svg"></img></a></div>
                </div>
                <p>© 2026 Joel Osian Roberts </p>
            </div>
            
        </footer>
    );

}