const skills = [
    {
        lang: "Python",
        logo: "/python.png",
        level: 4
    },
    {
        lang: "C",
        logo: "/c.png",
        level: 3
    },
    {
        lang: "C++",
        logo: "/cpp.png",
        level: 1
    },
    {
        lang: "Java",
        logo: "/java.png",
        level: 4
    },
    {
        lang: "C#",
        logo: "/csharp.png",
        level: 4
    },
    {
        lang: "PHP",
        logo: "/php.png",
        level: 5
    },
    {
        lang: "Javascript",
        logo: "/js.png",
        level: 3
    },
    {
        lang: "Tailwind",
        logo: "/tailwind.png",
        level: 5
    },
    {
        lang: "MySQL",
        logo: "/mysql.png",
        level: 5
    },
    {
        lang: "HTML",
        logo: "/html.png",
        level: 6
    },
    {
        lang: "CSS",
        logo: "/css.png",
        level: 6
    },
    {
        lang: "Powershell",
        logo: "/ps.png",
        level: 2
    },
    {
        lang: "PowerAutomate",
        logo: "/powerauto.png",
        level: 6
    },
]

export default function Skills(){
    return(
        <section>
            <p className="pt-20 pb-6">Skills:</p>
            <div className="grid grid-cols-7 gap-4">
            {skills.map((skl, index) => (
                <div key={index} className="p-2 bg-none hover:bg-[#3d3d3d]/50 rounded-lg transition-colors duration-300">
                    <a href={`https://github.com/joel06rob?tab=repositories&language=${skl.lang}`}>
                        <img className="w-[45px] h-[45px]" src={skl.logo}></img>
                        <p>{skl.lang}</p>
                        <div className="bg-gray-700 w-full h-1 mt-1 rounded">
                            <div className="bg-white h-1 rounded" style={{ width: `${(skl.level / 6) * 100}%` }}/>
                        </div>
                    </a>
                </div>
            ))}
            </div>
        </section>
    );
}