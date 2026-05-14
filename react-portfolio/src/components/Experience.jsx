const experiences = [
    {
        role: "IT Degree Apprentice",
        company: "Adra",
        location: "Bangor, Gwynedd, UK",
        date: "Aug 2024 - Present",
        logo: "/adra-logo.png",
        desc: [
            "Developed several applications including a vehicle CO2 emissions tracking system managing 400+ assets, integrating external APIs (DVLA) and handling real-time data processing and reporting.",
            "Built a secure, scalable document portal supporting thousands of users, implementing validation, access control, and backend sensitive data handling.",
            "Contributed to a machine learning project using Python, supporting data processing, model integration and experimental workflows.",
            "Refactoring, maintaining and optimising existing applications and automations to help improve performance and resolve system limitations.",
            "Assisted with integrating AI into the organisation through building AI automations, chatbots and upskilling staff with skills for a better and more efficient use of AI.",
            "Provided technical support and debugging for production systems, diagnosing issues across applications for users."            
        ],
        url: "https://www.adra.co.uk"
    }
]


export default function Experience(){
    return(
        <section>
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