const educations = [
    {
        qualification: "BSc Software Engineering",
        school: "Bangor University",
        location: "Bangor, Gwynedd, UK",
        logo: "/bangoruni.png",
        date: "2024 - 2027",
        grade: ""
    },
    {
        qualification: "A Levels",
        school: "Grwp Llandrillo Menai",
        location: "Pwllheli, Gwynedd, UK",
        logo: "/gllm.png",
        date: "2022 - 2024",
        grade: "Mathematics: A, Computer Science: A, Business: B"
    }
]

export default function Education(){
    return (
    <section>
      <p className="pt-20 pb-6">Education:</p>

      {educations.map((edu, index) => (
        <div key={index} className="w-full p-6 bg-[#161617]/55 rounded-lg mb-6 flex justify-between items-start">

          <div>
            <h3 className="text-xl font-semibold">{edu.qualification}</h3>
            <p className="text-gray-400">
              {edu.school} • {edu.location}
            </p>
            <p className="pt-4 text-gray-400">{edu.grade}</p>
          </div>

          <div className="flex flex-col items-end">
            <img src={edu.logo} alt={edu.school} className="w-18 h-18 object-contain mb-2"/>
            <p className="text-sm text-gray-500">{edu.date}</p>
          </div>
        </div>
      ))}
    </section>
  );
}