const experiences = [
    {
        role: "IT Degree Apprentice",
        company: "Adra",
        location: "Bangor, Gwynedd, UK",
        date: "Aug 2024 - Present",
        logo: "/adra-logo.png",
        desc: [
            "Developed multiple internal applications, including a vehicle CO2 emissions tracking platform managing 400+ assets, integrating external REST APIs (DVLA) via HTTP requests and supporting real-time data processing and reporting, supporting corporate social responsibility",
            "Engineered a secure and scalable document management portal supporting 1000s of external users, implementing validation, access control, and sensitive backend data handling",
            "Contributed to a machine learning project using Python, supporting data processing, model integration and experimental workflows.",
            "Built, refactored, and optimised automation workflows and Power Platform solutions (Power Automate, PowerShell, Power Apps) to streamline internal processes, improve performance and scalability, and reduce manual admin overhead.",
            "Supported organisational AI adoption by developing AI chatbots and automation workflows using Copilot Studio, integrating knowledge-grounded data (RAG) retrieval for agents, document processing, and custom AI model training",
            "Assisted with internal AI enablement by helping staff adopt AI tools effectively and safely, promoting best practices around governance, security, and efficient usage",
            "Provided helpdesk-level support, diagnosing, debugging and resolving production issues to improve system reliability and reduce downtime."            
        ],
        url: "https://www.adra.co.uk"
    }
]


export default function Experience(){
    return(
        <section id="experience">
            <p className="pt-20 pb-6">Experience:</p>
            {experiences.map((exp, index) => (
            <div key={index} className="mb-10">
            
            <div className="flex items-center gap-4">
                <img
                src={exp.logo}
                alt={exp.company}
                className="w-12 h-12 object-contain"/>

                <div>
                <h3 className="text-lg md:text-xl font-semibold">{exp.role}</h3>
                <p className="text-gray-400 text-sm md:text-base">
                    {exp.company} • {exp.location}
                </p>
                <p className="text-sm text-gray-500">{exp.date}</p>
                </div>
            </div>

            <ul className="list-disc ml-16 mt-4 space-y-2 text-sm md:text-base">
                {exp.desc.map((point, i) => (
                <li key={i} className="text-gray-300">
                    {point}
                </li>
                ))}
            </ul>

            </div>
        ))}


        </section>
    );
}