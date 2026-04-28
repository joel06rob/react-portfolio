const projects = [
    {
        title: "Thinknote",
        desc: "A project planning list app",
        langs: ["Javascript"]
    },
    {
        title: "CEIR Terminal",
        desc: "A C Terminal simulating vehicle diagnostics and reporting",
        langs: ["C", "Python"]
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
        <div className="grid grid-cols-3 gap-3">
            {projects.map((proj, index) => (
            <div key={index} className="bg-gray-950/55 p-6 rounded-lg mb-6">

                <h3 className="text-xl font-semibold">{proj.title}</h3>
                <p className="text-gray-400 mb-4">{proj.desc}</p>

                <div className="flex flex-wrap gap-2">
                {proj.langs.map((lang, i) => (
                    <span key={i} className={`px-3 py-1 text-sm rounded-full border ${languages[lang] || "bg-gray-500/20 text-gray-300 border-gray-500/30"}`}>
                    {lang}
                    </span>
                ))}
                </div>

            </div>
            ))}
        </div>
      </section>  
    );
}