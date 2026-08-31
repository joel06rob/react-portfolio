
export default function About(){
    return(
        <section className="relative w-full">
        <div className="h-48 md:h-56 bg-black/90" />
        <nav className="max-w-5xl mx-auto px-4 py-6 flex justify-end">
            <ul className="flex gap-6 text-sm text-gray-400">
            <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>

            <li><a href="#education" className="hover:text-white transition-colors">Education</a></li>

            <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>

            <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            </ul>
        </nav>


        <div className="relative max-w-5xl mx-auto px-4">

         
            <div className="absolute -top-16">
            <img src="/pfp.jpg" className="w-32 h-32 rounded-full border-4 border-black object-cover"/>
            </div>
                

            <div className="pt-16 pb-6 flex justify-between">
                <div className="flex-col">
                    <h1 className="text-xl md:text-3xl font-bold">Joel Osian Roberts</h1>
                    <p className="text-gray-400 text-sm md:text-base">
                        Software Engineer Degree Apprentice | Learning Embedded Systems
                    </p>
                    <img className="mt-1 w-6 h-4" src="/welshflag.svg"></img>
                </div>
                <div>
                    <ul className="flex flex-col md:flex-row">
                        <li className="p-1 bg-none hover:bg-[#3d3d3d]/50 rounded-lg"><a href="https://github.com/joel06rob"><img src="/icons8-github.svg"></img></a></li>
                        <li className="p-1 bg-none hover:bg-[#3d3d3d]/50 rounded-lg"><a href="https://www.linkedin.com/in/joel-osian-roberts-8a76b02b0/"><img src="/icons8-linkedin.svg"></img></a></li>
                        <li className="p-1 bg-none hover:bg-[#3d3d3d]/50 rounded-lg"><a href="mailto:joel.roberts2006@gmail.com"><img src="/icons8-mail-30.png"></img></a></li>
                        <li className="p-1 bg-none hover:bg-[#3d3d3d]/50 rounded-lg"><a href="JR_CV_SEPT.pdf"><img src="/icons8-cv-30.png"></img></a></li>
                    </ul>
                </div>
                
            </div>

            <div>
                <p className="pt-6">Overview:</p>
                <ul className="text-gray-400 flex flex-col gap-2 md:gap-1 pt-1 text-sm md:text-base">
                    <li className="flex"><img src="/icons8-briefcase-16.png" className="object-contain pr-1"></img> I'm a Software Engineer Degree Apprentice with 2+ years experience in the software development industry.</li>
                    <li className="flex"><img src="/icons8-graduate-16.png" className="object-contain pr-1"></img> Currently in my final year of my BSc degree where I work ~40 hours a week alongside at Adra.</li>
                    <li className="flex"><img src="/icons8-cpu-16.png" className="object-contain pr-1"></img>  I'm currently learning Embedded Systems and have been working on personal projects with microcontrollers such as STM32Nucleo.</li>
                    <li className="flex"><img src="/icons8-person-16.png" className="object-contain pr-1"></img> In my spare time I enjoy fitness, playing rugby and socialising.</li>
                    <li className="flex"><img src="/icons8-speech-bubble-16.png" className="object-contain pr-1"></img> English (Fluent), Welsh (Fluent), Swedish (Beginner)</li>
                </ul>
            </div>

        </div>



        </section>

    );
}