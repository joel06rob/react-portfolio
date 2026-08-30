const projects = [
    {
        title: "Arduino Auth",
        desc: "Local authentication through Arduino Uno Q",
        langs: ["C++", "Arduino", "Python", "Javascript"],
        img: "/arduinoauthss.jpg",
        link: "https://github.com/joel06rob/Arduino-Auth-System"
    },
    {
        title: "STM32 CAN Bus Arduino",
        desc: "Establishing a Classic CAN connection between an STM32F446RE and Arduino Uno Q - Bridging hardware via CAN and then visualising the CAN frame using a Web UI",
        langs: ["STM32", "Arduino", "C"],
        img: "/P2_wiring.jpg",
        link: "https://github.com/joel06rob/STM32_to_Arduino_CAN"
    },
    {
        title: "CEIR Terminal",
        desc: "A C Terminal simulating vehicle diagnostics and reporting",
        langs: ["C", "Python"],
        img: "/ceirterminal.png",
        link: "https://github.com/joel06rob/CEIR-Terminal"
    },
    {
        title: "Thinknote",
        desc: "A project planning list app",
        langs: ["Javascript"],
        img: "/thinknote.png",
        link: "https://github.com/joel06rob/ThinkNote"
    },
    
]

const languages = {
    Python: "text-white bg-[#284E6A]/50 border-[#284E6A]",
    Javascript: "text-white bg-[#979522]/50 border-[#979522]",
    C: "text-white bg-[#3A5061]/50 border-[#3A5061]",
    "C++": "text-white bg-[#0C1C63]/50 border-[#0C1C63]",
    Arduino: "text-white bg-[#92002E]/50 border-[#92002E]",
    STM32: "text-white bg-[#92002E]/50 border-[#92002E]",
    "In Development": "text-white bg-[#fa8b0c]/50 border-[#fa8b0c]"
    
}

export default function Projects(){
    return(
      <section id="projects">
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