const projects = [
    {
        title: "Thinknote",
        desc: "A project planning list app",
        langs: ["Javascript"],
        img: "/thinknote.png",
        link: "https://github.com/joel06rob/ThinkNote"
    },
    {
        title: "CEIR Terminal",
        desc: "A C Terminal simulating vehicle diagnostics and reporting",
        langs: ["C", "Python"],
        img: "/ceirterminal.png",
        link: "https://github.com/joel06rob/CEIR-Terminal"
    },
    

]

const languages = {
    Python: "text-white bg-[#284E6A]/50 border-[#284E6A]",
    Javascript: "text-white bg-[#979522]/50 border-[#979522]",
    C: "text-white bg-[#3A5061]/50 border-[#3A5061]"
}

export default function Projects(){
    return(
      <section>
        <p className="pt-20 pb-6">Projects:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-3">
            {projects.map((proj, index) => (
            <a key={index} href={proj.link} className="bg-[#161617]/55 p-6 rounded-lg mb-6 hover:bg-[#3d3d3d]/50 transition-colors duration-300">
                
                <img src={proj.img} className="rounded-lg pb-2"></img>
                <h3 className="text-lg md:text-xl font-semibold">{proj.title}</h3>
                <p className="text-sm md:text-base text-gray-400 mb-4">{proj.desc}</p>

                <div className="flex flex-wrap gap-2">
                {proj.langs.map((lang, i) => (
                    <span key={i} className={`px-3 py-1 text-sm rounded-full border ${languages[lang] || "bg-gray-500/20 text-gray-300 border-gray-500/30"}`}>
                    {lang}
                    </span>
                ))}
                </div>
            </a>
            
            ))}
            <a href="https://github.com/joel06rob/" className="bg-[#161617]/55 p-6 rounded-lg mb-6 hover:bg-[#3d3d3d]/50 transition-colors duration-300">
                <img src="/icons8-github.svg" className="pb-2"></img>
                <h3 className="text-xl font-semibold">More Projects ↗</h3>
                <p className="text-gray-400 mb-4">I'm constantly learning and developing, see my Github for more projects!</p>
            </a>
        </div>
      </section>  
    );
}